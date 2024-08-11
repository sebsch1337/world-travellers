import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				azure: "#EDFDFA",
				mint: "#DAFBF5",
				celeste: "#B6F7EB",
				turquoise: "#18DCB8",
				night: "#04251F",
			},
		},
	},
	plugins: [],
};
export default config;
