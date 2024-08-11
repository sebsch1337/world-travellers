import { render, screen } from "@testing-library/react";

import { Button } from "@/components/button";

describe("Button Components", () => {
	it("renders Button with children", () => {
		render(<Button>Button Test</Button>);

		const buttonTest = screen.getByText("Button Test");
		expect(buttonTest).toBeInTheDocument();
	});
});
