import { toast } from "sonner";
import { create } from "zustand";

import { createAssistant, createThread, deleteThread } from "@/services/openAIService";

type Store = {
	assistantId: string | null;
	threadId: string | null;
	isInitiated: boolean;
	initThread: () => Promise<void>;
	terminateThread: () => Promise<void>;
};

export const useOpenAI = create<Store>()((set, get) => ({
	assistantId: null,
	threadId: null,
	isInitiated: false,

	initThread: async () => {
		try {
			const newAssistant = await createAssistant();
			const newThread = await createThread();

			if (!newAssistant?.id || !newThread?.id) throw new Error();

			set(() => ({ assistantId: newAssistant.id }));
			set(() => ({ threadId: newThread.id }));
			set(() => ({ isInitiated: true }));
		} catch (e) {
			toast.error(`Der CareAdvisor ist gerade nicht erreichbar. Bitte versuche es in einigen Minuten erneut.`);
		}
	},

	terminateThread: async () => {
		const { threadId } = get();
		if (!threadId) return;

		await deleteThread(threadId);
		set(() => ({ isInitiated: false }));
	},
}));
