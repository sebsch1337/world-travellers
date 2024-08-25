import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IPhoneWrapper } from "@/components/iphone-wrapper";

export default function LangzeitPage() {
	return (
		<div className="h-dvh w-full sm:grid sm:place-items-center">
			<IPhoneWrapper>
				<div className="max-h-full px-4 pt-4 pb-8 sm:py-14 flex flex-col overflow-hidden">
					<Header showNavButton={false} />
					<article className="max-h-full overflow-auto p-2 flex flex-col gap-4 hyphens-auto text-sm">
						<section>
							<h1 className="font-bold text-lg mb-2">Langzeit-Auslandskrankenversicherung ohne USA und Kanada</h1>
							<p>
								Die World Travellers Auslandskrankenversicherung bietet eine starke Absicherung für Auslandsaufenthalte bis zu 5
								Jahren mit besonders günstigen Konditionen für Reisen bis zu 12 Monaten.
							</p>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Versicherungsschutz</h2>
							<p>Unsere Versicherung deckt eine Vielzahl von medizinischen Behandlungen während deiner Reise, wie etwa:</p>
							<ul className="p-1 pl-2">
								<li>- Ambulante und stationäre Behandlungen im Krankenhaus bei Krankheit oder Unfall</li>
								<li>- Schwangerschaftsvorsorge und Geburt in der Premium-Variante</li>
								<li>- Freie Wahl von Ärzten und Krankenhäusern</li>
								<li>- Krankentransport und Rücktransport ins Heimatland</li>
								<li>- Alle Sportarten und berufliche Tätigkeiten im Ausland sind versichert</li>
							</ul>
							<p>
								Zusätzlich bieten wir flexiblen Versicherungsschutz für Aufenthalte in USA und Kanada bei Bedarf und eine
								monatliche Prämienzahlung ohne zusätzliche Kosten.
							</p>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Tarifoptionen</h2>
							<p>
								Du kannst zwischen der &quot;Basic&quot;-Variante mit einem Selbstbehalt von 100 € je Schadensfall und der
								&quot;Premium&quot;-Variante ohne Selbstbehalt wählen, die auch Vorsorgeuntersuchungen und unbegrenzte
								Zahnbehandlungen beinhaltet.
							</p>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Prämienübersicht</h2>
							<table>
								<thead>
									<tr>
										<th>Reisedauer</th>
										<th>Prämie (Basic)</th>
										<th>Prämie (Premium)</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1 - 12 Monate</td>
										<td>ab 25 € pro Monat</td>
										<td>ab 35 € pro Monat</td>
									</tr>
									<tr>
										<td>1 - 60 Monate</td>
										<td>ab 39 € pro Monat</td>
										<td>ab 55 € pro Monat</td>
									</tr>
								</tbody>
							</table>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Zusatzoptionen</h2>
							<p>
								Bei der Buchung kannst du optional zusätzliche Versicherungspakete wie Reiseunfall- und
								Reisehaftpflichtversicherungen hinzufügen.
							</p>
						</section>
					</article>
				</div>
			</IPhoneWrapper>
			<Footer />
		</div>
	);
}
