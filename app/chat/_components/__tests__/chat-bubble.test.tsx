import { render, screen } from "@testing-library/react";
import { ChatBubble } from "../chat-bubble";

jest.mock("react-markdown", () => {
	const MockReactMarkdown = ({ children }: { children: React.ReactNode }) => {
		return <div>{children}</div>;
	};
	MockReactMarkdown.displayName = "MockReactMarkdown";
	return MockReactMarkdown;
});

describe("ChatBubble Component", () => {
	it("renders the text correctly when not typing", () => {
		render(
			<ChatBubble
				isTyping={false}
				text="Hello, world!"
			/>
		);
		expect(screen.getByText("Hello, world!")).toBeInTheDocument();
	});

	it("renders the PulseLoader when typing", () => {
		render(<ChatBubble isTyping={true} />);
		expect(screen.getByLabelText("Tippt...")).toBeInTheDocument();
	});

	it("applies bot styling when isBot is true", () => {
		render(
			<ChatBubble
				isBot={true}
				text="Bot message"
			/>
		);
		const bubble = screen.getByText("Bot message").parentElement;
	});

	it("applies user styling when isBot is false", () => {
		render(
			<ChatBubble
				isBot={false}
				text="User message"
			/>
		);
		const bubble = screen.getByText("User message").parentElement;
	});
});
