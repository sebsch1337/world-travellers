"use client";

import { useEffect, useState } from "react";

import { IconBrandTelegram } from "@tabler/icons-react";

import { cn } from "@/utils/cn";

import { ChatBubble } from "./chat-bubble";

import { useChat } from "@/hooks/useChat";
import { useOpenAI } from "@/hooks/useOpenAI";
import { useScrollToBottom } from "@/hooks/useScrollToBottom";
import { Button } from "@/components/button";

export const ChatWrapper = () => {
	const [inputValue, setInputValue] = useState<string>();
	const { messages, addMessage, clearMessages, sendMessage, isTyping, setisTyping } = useChat();
	const { isInitiated, initThread, assistant, thread } = useOpenAI();
	const chatFrameRef = useScrollToBottom(messages, isTyping);

	useEffect(() => {
		if (isInitiated) return;

		const startChat = async () => {
			setisTyping(true);
			await initThread();

			clearMessages();
			addMessage(
				"Hallo und herzlich willkommen! Möchten Sie den passenden Tarif für Ihren Auslandsaufenthalt finden oder haben Sie allgemeine Fragen zu den Tarifen der World Travellers? Ich helfe Ihnen gerne weiter!",
				"bot"
			);

			setisTyping(false);
		};

		startChat();
	}, [isInitiated, initThread, setisTyping, addMessage, clearMessages]);

	const handleWelcomeChoice = (text: string) => {
		if (!assistant || !thread) return;
		sendMessage(assistant, thread, text);
	};

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputText = e.target.value.trim();
		setInputValue(inputText);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!inputValue || !assistant || !thread) return;
		setInputValue("");
		e.currentTarget.reset();
		sendMessage(assistant, thread, inputValue);
	};

	return (
		<main className="h-full px-2 flex flex-col gap-2 overflow-hidden">
			<section
				ref={chatFrameRef}
				className="px-2 flex-grow-0 flex flex-col overflow-y-auto overflow-x-hidden scroll-smooth"
			>
				{messages?.map((message) => (
					<ChatBubble
						key={message.id}
						message={message}
					/>
				))}
				{isTyping && <ChatBubble isTyping />}
			</section>

			<div className="flex-grow"></div>

			<form
				className="flex-grow-0 w-full flex flex-nowrap relative"
				onSubmit={handleSubmit}
			>
				{messages.length < 2 ? (
					<div className="w-full">
						<Button
							onClick={() => handleWelcomeChoice("Tarif finden")}
							disabled={!isInitiated}
						>
							Tarif finden
						</Button>
						<Button
							onClick={() => handleWelcomeChoice("Allgemeine Fragen")}
							disabled={!isInitiated}
						>
							Allgemeine Fragen
						</Button>
					</div>
				) : (
					<>
						<input
							name="message"
							type="text"
							placeholder="Nachricht eingeben..."
							className="w-full h-12 bg-turquoise border-none rounded-full border-2 pl-5 pr-12 outline-none placeholder-night/40"
							onChange={onChangeInput}
							autoComplete="off"
							autoCorrect="off"
							spellCheck={false}
						/>
						<button
							type="submit"
							className="w-8 h-8 absolute right-3 self-center grid place-items-center "
							disabled={!!!inputValue || isTyping || !isInitiated}
						>
							<IconBrandTelegram
								className={cn(
									"transition-all duration-300 w-6 h-6",
									!!inputValue && !isTyping && isInitiated ? "stroke-night" : "stroke-night/30"
								)}
							/>
						</button>
					</>
				)}
			</form>
		</main>
	);
};
