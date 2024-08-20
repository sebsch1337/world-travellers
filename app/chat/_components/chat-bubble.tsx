import { PulseLoader } from "react-spinners";
import { useRemarkSync } from "react-remark";

import { cn } from "@/utils/cn";

interface ChatBubbleProps {
	isBot?: boolean;
	isTyping?: boolean;
	text?: string;
}
export const ChatBubble = ({ isBot = false, isTyping = false, text = "" }: ChatBubbleProps) => {
	const markdownContent = useRemarkSync(text);

	return (
		<div className={cn("w-full mt-4 flex", !isBot && "justify-end")}>
			{isTyping ? (
				<div
					className={cn(
						"flex justify-center items-center h-8 px-4 py-3 rounded-t-xl",
						isBot ? "bg-celeste rounded-br-xl" : "bg-turquoise rounded-bl-xl"
					)}
				>
					<PulseLoader
						size={10}
						color="#18DCB8"
						aria-label="Tippt..."
					/>
				</div>
			) : (
				<div
					className={cn(
						"inline-block px-4 py-3 text-sm break-words hyphens-auto rounded-t-xl max-w-[90%]",
						isBot ? "bg-celeste rounded-br-xl" : "bg-turquoise rounded-bl-xl",
						isTyping && "text-sm italic text-night/40 animate-pulse"
					)}
				>
					{markdownContent}
				</div>
			)}
		</div>
	);
};
