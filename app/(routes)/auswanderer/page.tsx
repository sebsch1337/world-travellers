import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IPhoneWrapper } from "@/components/iphone-wrapper";

export default function AuswandererPage() {
	return (
		<div className="h-dvh w-full sm:grid sm:place-items-center">
			<IPhoneWrapper>
				<div className="max-h-full px-4 pt-4 pb-8 sm:py-14 flex flex-col overflow-hidden">
					<Header showNavButton={false} />
					<article className="max-h-full overflow-auto p-2 flex flex-col gap-4 hyphens-auto text-sm">
						<section>
							<h1 className="font-bold text-lg mb-2">Auslandskrankenversicherung für Auswanderer</h1>
							<p>
								Die Auslandskrankenversicherung für Auswanderer bietet Versicherungsschutz für Personen, die ihren Wohnsitz
								dauerhaft ins Ausland verlegen.
							</p>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Versicherungsumfang</h2>
							<p>
								Der Versicherungsschutz umfasst medizinische Behandlungen und Rücktransporte, wobei es sich um eine
								Langzeitversicherung ohne Altersbegrenzung handelt.
							</p>
						</section>

						<section>
							<h2 className="text-md font-bold mb-2">Wichtige Details</h2>
							<p>
								Die Versicherung ist für Personen, die dauerhaft im Ausland leben möchten, und bietet langfristigen Schutz mit
								flexiblen Tarifoptionen.
							</p>
						</section>
					</article>
				</div>
			</IPhoneWrapper>
			<Footer />
		</div>
	);
}
