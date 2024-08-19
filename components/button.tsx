import { Montserrat_Alternates } from "next/font/google";
const MontserratAlternates = Montserrat_Alternates({ subsets: ["latin"], weight: ["600", "700"] });

import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const Button = ({ onClick, className, children, ...props }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				MontserratAlternates.className,
				"bg-turquoise disabled:bg-turquoise/40 disabled:text-night/40 w-full h-12 mb-4 text-lg select-none",
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
};
