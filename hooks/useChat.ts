import { create } from "zustand";

import { sendAssistantMessage } from "@/services/openAIService";

import { Message } from "@/types/messageTypes";

import type { Assistant } from "openai/resources/beta/assistants.mjs";
import type { Thread } from "openai/resources/beta/index.mjs";

interface ChatState {
	messages: Message[];
	isTyping: boolean;
	addMessage: (message: string, sender: "user" | "bot") => void;
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
		};

		set((state) => ({
			messages: [...state.messages, newMessage],
		}));
	},

	sendMessage: async (assistant, thread, text) => {
		const { addMessage, setisTyping } = get();

		addMessage(text, "user");

		setTimeout(async () => {
			setisTyping(true);

			try {
				const responseText = await sendAssistantMessage(assistant, thread, text);
				addMessage(responseText, "bot");
				setisTyping(false);
			} catch (error) {
				console.error("Failed to send message:", error);
				setisTyping(false);
			}
		}, 500);
	},

	setisTyping: (isTyping) => set({ isTyping }),

	clearMessages: () => set({ messages: [] }),
}));
