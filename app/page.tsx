import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IPhoneWrapper } from "@/components/iphone-wrapper";
import { Box, BoxText, BoxTitle } from "@/components/box";
import { MainTitle, SubTitle, Title } from "@/components/title";
import Link from "next/link";

export default function HomePage() {
	return (
		<div className="h-dvh w-full sm:grid sm:place-items-center">
			<IPhoneWrapper>
				<div className="my-10 mx-4 h-full flex flex-col justify-between">
					<Header isLandingPage />
					<main className="flex-1 mx-4 flex flex-col justify-between relative">
						<div>
							<Title>
								<MainTitle>CareAdvisor</MainTitle>
								<SubTitle>Auslandskrankenversicherung</SubTitle>
							</Title>

							<div className="relative">
								<Box>
									<BoxTitle>Digitale Beratung</BoxTitle>
									<BoxText>
										Der CareAdvisor ist dein digitaler Berater für Auslandskrankenversicherungen. Er hilft dir, die passende
										Versicherung für deine Reisepläne zu finden, sei es für Kurzreisen, langfristige Auslandsaufenthalte oder
										Auswanderung. Schnell, einfach und maßgeschneidert – für umfassenden Schutz weltweit.
									</BoxText>
								</Box>
							</div>
						</div>

						<Link href="/chat">
							<Button>CareAdvisor starten</Button>
						</Link>
					</main>
				</div>
			</IPhoneWrapper>
			<Footer />
		</div>
	);
}
