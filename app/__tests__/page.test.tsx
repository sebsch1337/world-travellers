import { render, screen } from "@testing-library/react";

import HomePage from "../page";

jest.mock("../_components/marketing-swiper", () => ({
	__esModule: true,
	MarketingSwiper: () => null,
}));

describe("Home Page", () => {
	it("renders the Home page with all key components and content", () => {
		render(<HomePage />);

		expect(screen.getByText("tariff finder")).toBeInTheDocument();
		expect(screen.getByText("Auslandskrankenversicherung")).toBeInTheDocument();
		expect(screen.getByText("tariff finder starten")).toBeInTheDocument();
		expect(screen.getByText("Sebastian Scherbes")).toBeInTheDocument();
	});
});
