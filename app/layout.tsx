import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/utils/cn";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "World Travellers",
	description: "Günstige Auslandsversicherungen",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body className={cn(inter.className, "bg-azure text-night")}>{children}</body>
		</html>
	);
}
