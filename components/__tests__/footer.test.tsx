import { render, screen } from "@testing-library/react";

import { Footer } from "@/components/footer";

describe("Footer Components", () => {
	it("renders Footer with children", () => {
		render(<Footer />);

		const footerText = screen.getByText("Sebastian Scherbes");
		expect(footerText).toBeInTheDocument();
	});
});
