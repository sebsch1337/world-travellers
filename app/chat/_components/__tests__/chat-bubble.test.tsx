import { render, screen } from "@testing-library/react";
import { ChatBubble } from "../chat-bubble";
import { Message } from "@/types/messageTypes";

describe("ChatBubble Component", () => {
	it("renders the text correctly when not typing", () => {
		const message: Message = {
			id: "1",
			text: "Hello, world!",
			sender: "user",
			state: "success",
		};

		render(
			<ChatBubble
				message={message}
				isTyping={false}
			/>
		);
		expect(screen.getByText("Hello, world!")).toBeInTheDocument();
	});

	it("renders the PulseLoader when typing", () => {
		render(<ChatBubble isTyping={true} />);
		expect(screen.getByLabelText("Tippt...")).toBeInTheDocument();
	});

	it("applies bot styling when sender is bot", () => {
		const message: Message = {
			id: "2",
			text: "Bot message",
			sender: "bot",
			state: "success",
		};

		render(<ChatBubble message={message} />);
		const bubble = screen.getByText("Bot message").parentElement;
		expect(bubble).toHaveClass("bg-celeste");
	});

	it("applies user styling when sender is user", () => {
		const message: Message = {
			id: "3",
			text: "User message",
			sender: "user",
			state: "success",
		};

		render(<ChatBubble message={message} />);
		const bubble = screen.getByText("User message").parentElement;
		expect(bubble).toHaveClass("bg-turquoise");
	});

	it("applies failed styling when state is failed", () => {
		const message: Message = {
			id: "4",
			text: "Failed message",
			sender: "bot",
			state: "failed",
		};

		render(<ChatBubble message={message} />);
		const bubble = screen.getByText("Failed message").parentElement;
		expect(bubble).toHaveClass("bg-red-200");
	});
});
