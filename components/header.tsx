import Image from "next/image";

import { IconMenu2 } from "@tabler/icons-react";

import Logo from "@/public/logo.svg";

import { cn } from "@/utils/cn";

interface HeaderProps {
	isLandingPage?: boolean;
}

export const Header = ({ isLandingPage = false }: HeaderProps) => {
	return (
		<header className={cn("flex", isLandingPage ? "justify-center my-4" : "justify-between p-2")}>
			<Image
				src={Logo}
				alt="World Travellers Logo"
				className={cn(isLandingPage ? "w-[90%]" : "w-2/5", "pointer-events-none select-none")}
			/>
			<IconMenu2 className={cn("mr-2 w-8 h-8 self-center", isLandingPage && "hidden")} />
		</header>
	);
};
