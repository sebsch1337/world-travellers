import Image from "next/image";

import iPhone from "@/assets/iPhone.svg";

interface IPhoneWrapperProps {
	children: React.ReactNode;
}

export const IPhoneWrapper = ({ children }: IPhoneWrapperProps) => {
	return (
		<div className="h-full flex flex-col justify-between sm:w-[369.29px] sm:h-[770px] sm:aspect-[369.29/770] sm:rounded-[14.67%] relative bg-azure pointer-events-none">
			<Image
				src={iPhone}
				alt="iPhone 15 Pro"
				className="absolute top-0 left-0 pointer-events-none hidden sm:block"
			/>
			{children}
		</div>
	);
};
