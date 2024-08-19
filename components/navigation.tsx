"use client";

import { Dispatch, SetStateAction } from "react";

import { IconRefresh, IconX } from "@tabler/icons-react";
import { useOpenAI } from "@/hooks/useOpenAI";
import { useChat } from "@/hooks/useChat";

interface NavigationProps {
	setShowMenu: Dispatch<SetStateAction<boolean>>;
}

export const Navigation = ({ setShowMenu }: NavigationProps) => {
	const { terminateThread, initThread } = useOpenAI();
	const { clearMessages } = useChat();

	const onResetChat = async () => {
		clearMessages();
		setShowMenu(false);
		await terminateThread();
		await initThread();
	};

	return (
		<nav className="w-60 absolute top-2 right-0 bg-mint z-20 shadow-md rounded-xl transition-all duration-300">
			<div className="w-full flex justify-end">
				<button
					className="p-2"
					onClick={() => setShowMenu((state) => !state)}
				>
					<IconX className="w-8 h-8" />
				</button>
			</div>
			<div className="w-full flex justify-center mt-2 mb-4">
				<button
					onClick={onResetChat}
					className="flex justify-center items-center gap-2 w-full h-10 text-lg hover:bg-turquoise transition-all duration-300"
				>
					<IconRefresh className="h-6 w-6 stroke-night" /> Chat neustarten
				</button>
			</div>
		</nav>
	);
};
