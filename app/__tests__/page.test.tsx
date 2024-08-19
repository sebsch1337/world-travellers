import { render, screen } from "@testing-library/react";
import HomePage from "../page";

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

describe("Home Page", () => {
	it("renders the Home page", () => {
		render(<HomePage />);

		expect(screen.getByText("Auslandskrankenversicherung")).toBeInTheDocument();
	});
});
