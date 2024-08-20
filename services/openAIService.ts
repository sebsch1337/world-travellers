"use server";

import OpenAI from "openai";

import type { Assistant, Thread, ThreadDeleted } from "openai/resources/beta/index.mjs";

const openai = new OpenAI() || null;
const assistantId = process.env.OPEN_AI_ASSISTANT;

export const createAssistant = async (): Promise<Assistant | null> => {
	if (!assistantId) return null;
	const newAssistant = await openai.beta.assistants.retrieve(assistantId);
	return newAssistant;
};

export const createThread = async (): Promise<Thread> => await openai.beta.threads.create();

export const deleteThread = async (thread: Thread): Promise<ThreadDeleted> => await openai.beta.threads.del(thread.id);

export const sendAssistantMessage = async (assistant: Assistant, thread: Thread, newMessage: string): Promise<string> => {
	const message = await openai.beta.threads.messages.create(thread.id, {
		role: "user",
		content: newMessage,
	});

	let run = await openai.beta.threads.runs.createAndPoll(thread.id, {
		assistant_id: assistant.id,
	});

	if (run.status === "completed") {
		const messages: any = await openai.beta.threads.messages.list(run.thread_id);
		return messages.data[0].content[0].text.value;
	} else {
		throw new Error();
	}
};
