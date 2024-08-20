"use client";

import Link from "next/link";
import Image from "next/image";

import { IconMenu2 } from "@tabler/icons-react";

import Logo from "@/public/logo.svg";

import { cn } from "@/utils/cn";
import { useState } from "react";
import { Navigation } from "./navigation";

interface HeaderProps {
	isLandingPage?: boolean;
	showNavButton?: boolean;
}

export const Header = ({ isLandingPage = false, showNavButton = true }: HeaderProps) => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<header className={cn("flex", isLandingPage ? "justify-center my-4" : "justify-between p-2")}>
			<Link
				href="/"
				className={cn(isLandingPage ? "w-[90%]" : "w-2/6")}
			>
				<Image
					src={Logo}
					alt="World Travellers Logo"
					className="pointer-events-none select-none"
				/>
			</Link>
			<div className="relative flex justify-center items-center">
				{showNavButton && (
					<button onClick={() => setShowMenu((state) => !state)}>
						<IconMenu2 className={cn("mr-2 w-8 h-8", isLandingPage && "hidden")} />
					</button>
				)}

				{showMenu && <Navigation setShowMenu={setShowMenu} />}
			</div>
		</header>
	);
};
