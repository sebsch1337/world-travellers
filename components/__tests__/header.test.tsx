import { render, screen } from "@testing-library/react";
import { Header } from "@/components/header";

jest.mock("next/image", () => ({
	__esModule: true,
	default: (props: any) => <img {...props} />,
}));

jest.mock("@/public/logo.svg", () => "logo.svg");

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

describe("Header Component", () => {
	it("renders Header without menu", () => {
		render(<Header isLandingPage={true} />);

		const logo = screen.getByAltText("World Travellers Logo");
		expect(logo).toBeInTheDocument();

		const images = screen.getAllByRole("img");
		expect(images.length).toBe(1);
	});

	it("renders Header with menu", () => {
		render(<Header />);

		const logo = screen.getByAltText("World Travellers Logo");
		expect(logo).toBeInTheDocument();

		const menuIcon = screen.queryByRole("img", { hidden: false });
		expect(menuIcon).toBeInTheDocument();
	});
});
