import SiteHeader from "../../components/site-header";
import InquiryForm from "../../components/inquiry-form";
import { cinemaModels } from "../../lib/cinema-products";
import type { Metadata } from "next";
import Image from "next/image";
import contactPhoto from "../../ChatGPT Image 8. Mai 2026, 13_02_39.png";

export const metadata: Metadata = {
  title: "Private Beratung für Ihr LED-Heimkino",
  description:
    "Sprechen Sie direkt mit CINEMA N°7 über Ihr LED-Heimkino. Persönliche Beratung per Telefon oder E-Mail.",
  alternates: {
    canonical: "/anfrage",
  },
  openGraph: {
    title: "Private Beratung für Ihr LED-Heimkino",
    description:
      "Direkter Ansprechpartner für Ihr LED-Heimkino.",
    url: "/anfrage",
  },
};

const phoneDisplay = "+49 (0) 5251 5449191";
const phoneHref = "tel:+4952515449191";
const email = "kontakt@cinema7.de";

export default async function InquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ modell?: string }>;
}) {
  const query = await searchParams;
  const selected = cinemaModels.find((item) => String(item.diagonalInches) === query.modell);
  const model = selected ? String(selected.diagonalInches) : undefined;
  const mailSubject = selected
    ? `Anfrage CINEMA N°7 – ${selected.diagonalInches} Zoll`
    : "Anfrage CINEMA N°7 LED-Heimkino";
  const mailBody = [
    "Guten Tag,",
    "",
    selected ? `ich interessiere mich für CINEMA N°7 in ${selected.diagonalInches} Zoll.` : "ich interessiere mich für ein CINEMA N°7 LED-Heimkino.",
    "",
    "Meine Fragen / mein Projekt:",
    "",
    "",
    "Mit freundlichen Grüßen",
  ].join("\n");
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
  const formEnabled = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL);

  return (
    <main className="inquiry-page">
      <SiteHeader />

      <section className="inquiry-hero" aria-labelledby="inquiry-title">
        <div className="inquiry-copy">
          <p className="overline-v5">PRIVATE BERATUNG</p>
          <h1 id="inquiry-title">Projekt anfragen.</h1>
          <p className="inquiry-intro">
            Lassen Sie uns über Ihr LED-Heimkino sprechen. Wir beraten Sie persönlich
            und finden die passende Lösung für Ihren Raum.
          </p>
          {selected && (
            <div className="cn7-inquiry-selected">
              <strong>Ihre Auswahl: CINEMA N°7 {selected.diagonalInches} Zoll</strong>
              <a href="/produkte">Andere Bildgröße wählen</a>
            </div>
          )}
          <InquiryForm model={model} directDelivery={formEnabled} />

          <div className="inquiry-contact">
            <p>Ihr Ansprechpartner</p>

            <div className="inquiry-person">
              <strong>Dennis Glaser</strong>
              <span>Persönliche Beratung</span>
            </div>

            <a href={phoneHref} className="inquiry-contact-link">
              <span>Telefon</span>
              <strong>{phoneDisplay}</strong>
            </a>

            <a href={mailHref} className="inquiry-contact-link">
              <span>E-Mail</span>
              <strong>{email}</strong>
            </a>
          </div>
        </div>

        <div className="inquiry-photo-wrap">
          <Image
            src={contactPhoto}
            alt="Ihr Ansprechpartner für CINEMA N°7"
            className="inquiry-photo"
            priority
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>
      </section>
      <section className="inquiry-showroom" id="showroom" aria-labelledby="showroom-title">
        <div><h2 id="showroom-title">Ihr Termin in Paderborn.</h2>
          <p>Erleben Sie unsere LED-Heimkinos persönlich im Showroom.
            Für eine Vorführung vereinbaren Sie Ihren Termin direkt mit uns.
            Nennen Sie uns gerne Ihren Wunschtermin und die Bildgröße, für die Sie sich interessieren.</p></div>
        <div className="seo-choice-actions">
          <a href={`mailto:${email}?subject=${encodeURIComponent("Vorführung im Showroom Paderborn – CINEMA N°7")}&body=${encodeURIComponent("Guten Tag,\n\nich möchte einen Termin für eine Vorführung in Ihrem Showroom in Paderborn vereinbaren.\n\nMein Wunschtermin:\nInteressante Bildgröße:\n\nMit freundlichen Grüßen")}`}>Vorführung per E-Mail anfragen</a>
          <a href={phoneHref}>Termin telefonisch vereinbaren</a>
        </div>
      </section>
    </main>
  );
}