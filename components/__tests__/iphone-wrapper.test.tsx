import { render, screen } from "@testing-library/react";

import { IPhoneWrapper } from "@/components/iphone-wrapper";

jest.mock("next/image", () => ({
	__esModule: true,
	default: (props: any) => <img {...props} />,
}));

jest.mock("@/assets/iPhone.svg", () => "iPhone.svg");

describe("IPhoneWrapper Component", () => {
	it("renders the iPhone background image on larger screens", () => {
		render(
			<IPhoneWrapper>
				<div>Content inside the wrapper</div>
			</IPhoneWrapper>
		);

		const iPhoneImage = screen.getByAltText("iPhone 15 Pro");
		expect(iPhoneImage).toBeInTheDocument();
		expect(iPhoneImage).toHaveClass("absolute top-0 left-0 pointer-events-none hidden sm:block");
	});

	it("renders children content inside the wrapper", () => {
		render(
			<IPhoneWrapper>
				<div>Content inside the wrapper</div>
			</IPhoneWrapper>
		);

		const content = screen.getByText("Content inside the wrapper");
		expect(content).toBeInTheDocument();
	});
});
