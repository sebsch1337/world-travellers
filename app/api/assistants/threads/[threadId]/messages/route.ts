import { assistantId } from "@/app/assistant-config";
import { streamAssistantMessage } from "@/services/openAIService";

interface PostRequestParams {
	threadId: string;
}

export async function POST(request: Request, { params }: { params: PostRequestParams }): Promise<Response> {
	const { threadId } = params;

	const { content } = await request.json();
	const stream = await streamAssistantMessage(assistantId, threadId, content);

	return new Response(stream.toReadableStream());
}
