import type { Assistant, Thread } from "openai/resources/beta/index.mjs";
import { create } from "zustand";

import { createAssistant, createThread, deleteThread } from "@/services/openAIService";

type Store = {
	assistant: Assistant | null;
	thread: Thread | null;
	isInitiated: boolean;
	initThread: () => Promise<void>;
	terminateThread: () => Promise<void>;
};

export const useOpenAI = create<Store>()((set, get) => ({
	assistant: null,
	thread: null,
	isInitiated: false,

	initThread: async () => {
		const newAssistant = await createAssistant();
		if (!newAssistant) return;
		set(() => ({ assistant: newAssistant }));

		const newThread = await createThread();
		if (!newThread) return;
		set(() => ({ thread: newThread }));

		set(() => ({ isInitiated: true }));
	},

	terminateThread: async () => {
		const { thread } = get();
		if (!thread) return;

		await deleteThread(thread);
		set(() => ({ isInitiated: false }));
	},
}));
