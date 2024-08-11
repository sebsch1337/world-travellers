"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { Box, BoxTitle, BoxText } from "@/components/box";

export const MarketingSwiper = () => {
	const [emblaRef] = useEmblaCarousel({ align: "start", loop: true }, [Autoplay({ delay: 10000 })]);

	const boxContent = [
		{
			title: "Weltweit und flexibel",
			text: (
				<>
					Unsere günstigen Auslandskrankenversicherungen sind ideal für alle Reisenden, unabhängig von Beruf, Reisezweck oder
					Ziel. Wir bieten exklusive Versicherungen für Auslandsreisen bis zu 5 Jahren und unbegrenzte internationale
					Krankenversicherungen für Langzeitaufenthalte, perfekt für Auswanderer, Digital Nomads und Arbeiten im Ausland.
				</>
			),
		},
		{
			title: "Top Leistungen",
			text: (
				<>
					Wir leisten mit hohen Deckungssummen bei Krankheit, Unfall, Zahnbehandlungen, Schwangerschaft und selbst bei
					Vorerkrankungen!
					<br />
					<br />
					Unsere Versicherungen decken weltweite Visa-Anforderungen ab!
				</>
			),
		},
		{
			title: "Optimal versichert",
			text: (
				<>
					Unsere anpassbaren Tarifvarianten lassen keine Wünsche übrig und bieten dir maximalen Schutz bei minimalen Kosten.
					<br />
					<br />
					Unser <span className="font-semibold">tariff finder</span> hilft dir beim Finden der passenden Absicherung!
				</>
			),
		},
	];

	return (
		<div
			className="overflow-hidden"
			ref={emblaRef}
		>
			<div className="flex gap-4">
				{boxContent.map((content) => {
					return (
						<div
							key={content.title}
							className="flex-[0_0_100%]"
						>
							<Box>
								<BoxTitle>{content.title}</BoxTitle>
								<BoxText>{content.text}</BoxText>
							</Box>
						</div>
					);
				})}
			</div>
		</div>
	);
};
