import { PulseLoader } from "react-spinners";
import { useRemarkSync } from "react-remark";

import { cn } from "@/utils/cn";

import { Message } from "@/types/messageTypes";

interface ChatBubbleProps {
	message?: Message;
	isTyping?: boolean;
}

export const ChatBubble = ({ message, isTyping = false }: ChatBubbleProps) => {
	const markdownContent = useRemarkSync(message?.text || "");

	return (
		<div className={cn("w-full mt-4 flex", message?.sender === "user" && "justify-end")}>
			{isTyping ? (
				<div className={cn("flex justify-center items-center h-8 px-4 py-3 rounded-t-xl bg-celeste rounded-br-xl")}>
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
						message?.sender === "bot" ? "bg-celeste rounded-br-xl" : "bg-turquoise rounded-bl-xl",
						message?.state === "failed" && "bg-red-200"
					)}
				>
					{markdownContent}
				</div>
			)}
		</div>
	);
};
