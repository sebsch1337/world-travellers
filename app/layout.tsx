import { Toaster } from "sonner";

import type { Metadata, Viewport } from "next";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { cn } from "@/utils/cn";

import "@/app/globals.css";

const domainUrl = process?.env?.DOMAIN_URL || process?.env?.VERCEL_URL || "";

export const metadata: Metadata = {
	title: "World Travellers",
	description: "Günstige Auslandskrankenversicherungen",
	metadataBase: new URL("https://" + domainUrl),
	openGraph: {
		title: "World Travellers",
		type: "website",
		description: "Der World Travellers CareAdvisor hilft dir, die passende Versicherung für deine Reisepläne zu finden.",
		siteName: "World Travellers",
		locale: "de_DE",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		images: "/og.png",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#B6F7EB" },
		{ media: "(prefers-color-scheme: dark)", color: "#18DCB8" },
	],
	maximumScale: 1,
	userScalable: false,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body className={cn(inter.className, " text-night")}>
				{children}
				<Toaster
					richColors
					duration={5000}
					closeButton
				/>
			</body>
		</html>
	);
}
