import { toast } from "sonner";
import { create } from "zustand";

import { Message } from "@/types/messageTypes";

import { AssistantStream } from "openai/lib/AssistantStream";

interface ChatState {
	messages: Message[];
	isTyping: boolean;
	inputDisabled: boolean;
	addMessage: (text: string, sender: "user" | "bot", state?: "success" | "failed") => string;
	changeMessageState: (id: string, newMessageState: "success" | "failed") => void;
	sendMessage: (threadId: string, text: string) => Promise<void>;
	appendToLastMessage: (text: string) => void;
	clearMessages: () => void;
	setIsTyping: (isTyping: boolean) => void;
	setInputDisabled: (inputDisabled: boolean) => void;
}

export const useChat = create<ChatState>()((set, get) => ({
	messages: [],
	isTyping: false,
	inputDisabled: false,

	addMessage: (text, sender) => {
		const newMessage: Message = {
			id: `${Date.now()}-${Math.random()}`,
			text,
			sender,
			state: "success",
		};

		set((state) => ({
			messages: [...state.messages, newMessage],
		}));

		return newMessage.id;
	},

	changeMessageState: (id, newMessageState) => {
		set((state) => ({
			messages: state.messages.map((message) => (message.id === id ? { ...message, state: newMessageState } : message)),
		}));
	},

	appendToLastMessage: (text) => {
		set((state) => {
			const lastMessage = state.messages[state.messages.length - 1];
			const updatedLastMessage = {
				...lastMessage,
				text: lastMessage.text + text,
			};
			return { messages: [...state.messages.slice(0, -1), updatedLastMessage] };
		});
	},

	sendMessage: async (threadId, text) => {
		const { addMessage, appendToLastMessage, setInputDisabled, setIsTyping, changeMessageState } = get();

		const addedMessageId = addMessage(text, "user");

		setInputDisabled(true);

		setTimeout(async () => {
			setIsTyping(true);

			try {
				const response = await fetch(`/api/assistants/threads/${threadId}/messages`, {
					method: "POST",
					body: JSON.stringify({
						content: text,
					}),
				});

				if (!response.body) throw new Error();

				const stream = AssistantStream.fromReadableStream(response.body);

				stream.on("textCreated", () => {
					setIsTyping(false);
					addMessage("", "bot");
				});

				stream.on("textDelta", (delta) => {
					if (delta.value != null) {
						appendToLastMessage(delta.value);
					}
				});

				stream.on("event", (event) => {
					if (event.event === "thread.run.completed") {
						setInputDisabled(false);
					}
				});
			} catch (e) {
				const error = e as Error;
				if (error.message) console.error(error.message);
				changeMessageState(addedMessageId, "failed");
				setInputDisabled(false);
				toast.error(`Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.`);
			}
		}, 500);
	},

	clearMessages: () => set({ messages: [] }),

	setIsTyping: (isTyping) => set({ isTyping }),

	setInputDisabled: (inputDisabled) => set({ inputDisabled }),
}));
