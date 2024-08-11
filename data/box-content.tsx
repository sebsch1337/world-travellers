interface boxContentProps {
	title: string;
	text: React.ReactElement;
}

export const boxContent: boxContentProps[] = [
	{
		title: "Weltweit und flexibel",
		text: (
			<>
				Unsere günstigen Auslandskrankenversicherungen sind ideal für alle Reisenden, unabhängig von Beruf, Reisezweck oder Ziel.
				Wir bieten exklusive Versicherungen für Auslandsreisen bis zu 5 Jahren und unbegrenzte internationale
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
