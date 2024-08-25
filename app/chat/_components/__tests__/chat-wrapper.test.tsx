import { render, screen } from "@testing-library/react";
import { ChatWrapper } from "../chat-wrapper";

jest.mock("openai", () => {
	return {
		__esModule: true,
		default: jest.fn().mockImplementation(() => ({
			beta: {
				threads: {
					runs: {
						createAndPoll: jest.fn().mockResolvedValue({
							id: "mocked-thread-id",
							messages: [{ role: "assistant", content: "Mocked Assistant Response" }],
						}),
					},
				},
			},
		})),
	};
});

jest.mock("@/hooks/useChat", () => ({
	useChat: jest.fn(() => ({
		messages: [
			{ id: "1", sender: "user", text: "Hello" },
			{ id: "2", sender: "bot", text: "Hi there!" },
		],
		addMessage: jest.fn(),
		sendMessage: jest.fn(),
		isTyping: false,
		setIsTyping: jest.fn(),
	})),
}));

jest.mock("@/hooks/useOpenAI", () => ({
	useOpenAI: jest.fn(() => ({
		isInitiated: true,
		initThread: jest.fn(),
		assistant: { id: "mocked-assistant-id" },
		thread: { id: "mocked-thread-id" },
	})),
}));

jest.mock("@/hooks/useScrollToBottom", () => ({
	useScrollToBottom: jest.fn(() => null),
}));

describe("ChatWrapper Component", () => {
	it("renders the ChatWrapper component", () => {
		render(<ChatWrapper />);
		expect(screen.getByPlaceholderText("Nachricht eingeben...")).toBeInTheDocument();
	});
});
