import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IPhoneWrapper } from "@/components/iphone-wrapper";

import { ChatWrapper } from "./_components/chat-wrapper";

export default function ChatPage() {
	return (
		<div className="h-dvh w-full sm:grid sm:place-items-center">
			<IPhoneWrapper>
				<div className="h-full px-4 pt-4 pb-8 sm:py-14 flex flex-col">
					<Header />
					<ChatWrapper />
				</div>
			</IPhoneWrapper>
			<Footer />
		</div>
	);
}
