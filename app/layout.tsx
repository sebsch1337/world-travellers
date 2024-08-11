import type { Metadata } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { cn } from "@/utils/cn";

import "@/app/globals.css";

export const metadata: Metadata = {
	title: "World Travellers",
	description: "Günstige Auslandskrankenversicherungen",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body className={cn(inter.className, " text-night")}>{children}</body>
		</html>
	);
}
