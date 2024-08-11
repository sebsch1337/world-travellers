import { render, screen } from "@testing-library/react";

import { Title, MainTitle, SubTitle } from "@/components/title";

jest.mock("next/font/google", () => ({
	__esModule: true,
	Montserrat_Alternates: () => ({
		className: "mocked-montserrat-alternates",
	}),
}));

describe("Title Components", () => {
	it("renders Title with MainTitle and SubTitle as children", () => {
		render(
			<Title>
				<MainTitle>Main Title Content</MainTitle>
				<SubTitle>Sub Title Content</SubTitle>
			</Title>
		);

		const mainTitle = screen.getByText("Main Title Content");
		expect(mainTitle).toBeInTheDocument();

		const subTitle = screen.getByText("Sub Title Content");
		expect(subTitle).toBeInTheDocument();
	});
});
