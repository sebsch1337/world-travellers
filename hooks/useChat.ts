import { toast } from "sonner";
import { create } from "zustand";

import { sendAssistantMessage } from "@/services/openAIService";

import { Message } from "@/types/messageTypes";

import type { Assistant } from "openai/resources/beta/assistants.mjs";
import type { Thread } from "openai/resources/beta/index.mjs";

interface ChatState {
	messages: Message[];
	isTyping: boolean;
	addMessage: (text: string, sender: "user" | "bot", state?: "success" | "failed") => string;
	changeMessageState: (id: string, newMessageState: "success" | "failed") => void;
	sendMessage: (assistant: Assistant, thread: Thread, text: string) => Promise<void>;
	setisTyping: (isTyping: boolean) => void;
	clearMessages: () => void;
}

export const useChat = create<ChatState>()((set, get) => ({
	messages: [],
	isTyping: false,

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

	sendMessage: async (assistant, thread, text) => {
		const { addMessage, setisTyping, changeMessageState } = get();

		const addedMessageId = addMessage(text, "user");

		setTimeout(async () => {
			setisTyping(true);

			try {
				const responseText = await sendAssistantMessage(assistant, thread, text);
				if (!responseText) throw new Error();
				addMessage(responseText, "bot");
			} catch (e) {
				const error = e as Error;
				if (error.message) console.error(error.message);
				changeMessageState(addedMessageId, "failed");
				toast.error(`Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.`);
			} finally {
				setisTyping(false);
			}
		}, 500);
	},

	setisTyping: (isTyping) => set({ isTyping }),

	clearMessages: () => set({ messages: [] }),
}));
