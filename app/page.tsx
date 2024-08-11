import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IPhoneWrapper } from "@/components/iphone-wrapper";
import { MainTitle, SubTitle, Title } from "@/components/title";

import { MarketingSwiper } from "./_components/marketing-swiper";

export default function HomePage() {
	return (
		<div className="h-dvh w-full sm:grid sm:place-items-center">
			<IPhoneWrapper>
				<div className="my-10 mx-4 h-full flex flex-col justify-between">
					<Header isLandingPage />
					<main className="flex-1 mx-4 flex flex-col justify-between relative">
						<div>
							<Title>
								<MainTitle>tariff finder</MainTitle>
								<SubTitle>Auslandskrankenversicherung</SubTitle>
							</Title>

							<div className="relative">
								<MarketingSwiper />
							</div>
						</div>

						<Button>tariff finder starten</Button>
					</main>
				</div>
			</IPhoneWrapper>
			<Footer />
		</div>
	);
}
