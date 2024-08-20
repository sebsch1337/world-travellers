import { toast } from "sonner";
import { create } from "zustand";

import { createAssistant, createThread, deleteThread } from "@/services/openAIService";

import type { Assistant, Thread } from "openai/resources/beta/index.mjs";

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
		try {
			const newAssistant = await createAssistant();
			const newThread = await createThread();

			if (!newAssistant || !newThread) throw new Error();

			set(() => ({ assistant: newAssistant }));
			set(() => ({ thread: newThread }));
			set(() => ({ isInitiated: true }));
		} catch (e) {
			toast.error(`Tarifberater macht gerade Pause. Bitte versuchen Sie es später erneut.`);
		}
	},

	terminateThread: async () => {
		const { thread } = get();
		if (!thread) return;

		await deleteThread(thread);
		set(() => ({ isInitiated: false }));
	},
}));
