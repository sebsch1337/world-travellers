import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IPhoneWrapper } from "@/components/iphone-wrapper";

export default function ActiveTravellersPage() {
	return (
		<div className="h-dvh w-full sm:grid sm:place-items-center">
			<IPhoneWrapper>
				<div className="max-h-full px-4 pt-4 pb-8 sm:py-14 flex flex-col overflow-hidden">
					<Header showNavButton={false} />
					<article className="max-h-full overflow-auto p-2 flex flex-col gap-4 hyphens-auto text-sm">
						<section>
							<h1 className="font-bold text-lg mb-2">Active Travellers Auslandskrankenversicherung bis zu 3 Jahre</h1>
							<p>
								Die Active Travellers Auslandskrankenversicherung bietet dir einen umfassenden Schutz für internationale
								Aufenthalte bis zu 3 Jahren, ideal für Abenteuerreisende und Langzeitaufenthalte.
							</p>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Leistungen der Versicherung</h2>
							<p>Unsere Versicherung umfasst zahlreiche medizinische Leistungen während deiner Reise, wie zum Beispiel:</p>
							<ul className="p-1 pl-2">
								<li>- Ambulante und stationäre Behandlungen bei Erkrankung oder Unfall</li>
								<li>- Notfallversorgung und Rücktransport ins Heimatland</li>
								<li>- Deckung von sportlichen Aktivitäten und beruflichen Einsätzen</li>
							</ul>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Tarifoptionen</h2>
							<p>
								Wir bieten verschiedene Tarife, darunter die Basis- und Premiumvarianten, mit Optionen für Selbstbehalte und
								zusätzlichen Leistungen wie Vorsorgeuntersuchungen.
							</p>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Preisübersicht</h2>
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
										<td>ab 29 € pro Monat</td>
										<td>ab 45 € pro Monat</td>
									</tr>
									<tr>
										<td>1 - 36 Monate</td>
										<td>ab 49 € pro Monat</td>
										<td>ab 65 € pro Monat</td>
									</tr>
								</tbody>
							</table>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Optionale Zusatzleistungen</h2>
							<p>
								Ergänze deine Versicherung mit zusätzlichen Paketen wie Unfallversicherung und Haftpflichtversicherung, die du bei
								der Buchung auswählen kannst.
							</p>
						</section>
					</article>
				</div>
			</IPhoneWrapper>
			<Footer />
		</div>
	);
}
