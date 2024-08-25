"use server";

import { openai } from "@/app/openai";
import { assistantId } from "@/app/assistant-config";

import type { Assistant, Thread, ThreadDeleted } from "openai/resources/beta/index.mjs";
import { AssistantStream } from "openai/lib/AssistantStream.mjs";

export const createAssistant = async (): Promise<Assistant | null> => {
	if (!assistantId) return null;
	const newAssistant = await openai.beta.assistants.retrieve(assistantId);
	return newAssistant;
};

export const createThread = async (): Promise<Thread> => await openai.beta.threads.create();

export const deleteThread = async (threadId: string): Promise<ThreadDeleted> => await openai.beta.threads.del(threadId);

export const streamAssistantMessage = async (
	assistantId: string,
	threadId: string,
	newMessage: string
): Promise<AssistantStream> => {
	await openai.beta.threads.messages.create(threadId, {
		role: "user",
		content: newMessage,
	});

	const stream = openai.beta.threads.runs.stream(threadId, {
		assistant_id: assistantId,
	});

	return stream;
};
