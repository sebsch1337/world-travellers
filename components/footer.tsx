import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="flex-0 absolute bottom-2 right-2">
			<p className="text-xs text-center text-night/30">
				Prototyp |{" "}
				<Link
					href="https://www.scherbes.com"
					target="_blank"
				>
					Sebastian Scherbes
				</Link>
			</p>
		</footer>
	);
};
