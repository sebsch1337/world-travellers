import { Montserrat_Alternates } from "next/font/google";
const MontserratAlternates = Montserrat_Alternates({ subsets: ["latin"], weight: ["700"] });

import { cn } from "@/utils/cn";

interface ButtonProps {
	children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
	return (
		<button className={cn(MontserratAlternates.className, "bg-turquoise w-full h-12 mb-4 text-lg select-none")}>
			{children}
		</button>
	);
};
