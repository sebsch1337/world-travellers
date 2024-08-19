import { useEffect, useRef } from "react";

import { Message } from "@/types/messageTypes";

export const useScrollToBottom = (messages: Message[], isTyping: boolean) => {
	const chatWindowRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setTimeout(() => {
			if (chatWindowRef.current) {
				chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
			}
		}, 50);
	}, [messages, isTyping]);

	return chatWindowRef;
};
