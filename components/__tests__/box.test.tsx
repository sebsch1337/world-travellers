import { render, screen } from "@testing-library/react";

import { Box, BoxTitle, BoxText } from "@/components/box";

describe("Box Components", () => {
	it("renders Box with children", () => {
		render(
			<Box>
				<BoxTitle>Box Title</BoxTitle>
				<BoxText>Box Text</BoxText>
			</Box>
		);

		const boxTitle = screen.getByText("Box Title");
		expect(boxTitle).toBeInTheDocument();

		const boxText = screen.getByText("Box Text");
		expect(boxText).toBeInTheDocument();
	});
});
