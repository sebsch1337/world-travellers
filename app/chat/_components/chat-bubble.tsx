import ReactMarkdown from "react-markdown";
import { PulseLoader } from "react-spinners";

import { cn } from "@/utils/cn";

interface ChatBubbleProps {
	isBot?: boolean;
	isTyping?: boolean;
	text?: string;
}
export const ChatBubble = ({ isBot = false, isTyping = false, text = "" }: ChatBubbleProps) => {
	return (
		<div className={cn("w-full mt-4 flex", !isBot && "justify-end")}>
			{isTyping ? (
				<div
					className={cn(
						"flex justify-center items-center h-8 px-4 py-3 text-sm break-words hyphens-auto rounded-t-xl max-w-[90%]",
						isBot ? "bg-celeste rounded-r-xl" : "bg-turquoise rounded-l-xl"
					)}
				>
					<PulseLoader
						size={10}
						color="#18DCB8"
						aria-label="Tippt..."
					/>
				</div>
			) : (
				<ReactMarkdown
					className={cn(
						"inline-block px-4 py-3 text-sm break-words hyphens-auto rounded-t-xl max-w-[90%]",
						isBot ? "bg-celeste rounded-r-xl" : "bg-turquoise rounded-l-xl",
						isTyping && "text-sm italic text-night/40 animate-pulse"
					)}
				>
					{text}
				</ReactMarkdown>
			)}
		</div>
	);
};
