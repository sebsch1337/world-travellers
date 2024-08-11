import { render, screen } from "@testing-library/react";

import { MarketingSwiper } from "../marketing-swiper";

import { boxContent } from "@/data/box-content";

jest.mock("embla-carousel-react", () => ({
	__esModule: true,
	default: () => [jest.fn()],
}));
jest.mock("embla-carousel-autoplay", () => jest.fn());

jest.mock("@/data/box-content", () => ({
	boxContent: [
		{ title: "Box Title 1", text: <>Box Text 1</> },
		{ title: "Box Title 2", text: <>Box Text 2</> },
		{ title: "Box Title 3", text: <>Box Text 3</> },
	],
}));

describe("MarketingSwiper Component", () => {
	it("renders all box content correctly", () => {
		render(<MarketingSwiper />);

		boxContent.forEach((content) => {
			expect(screen.getByText(content.title)).toBeInTheDocument();
			expect(screen.getByText("Box Text 2")).toBeInTheDocument();
		});
	});

	it("renders the correct number of boxes", () => {
		render(<MarketingSwiper />);

		const boxes = screen.getAllByRole("article");
		expect(boxes.length).toBe(boxContent.length);
	});
});
