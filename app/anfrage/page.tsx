import SiteHeader from "../../components/site-header";
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

export default function InquiryPage() {
  return (
    <main className="inquiry-page">
      <SiteHeader />

      <section className="inquiry-hero" aria-labelledby="inquiry-title">
        <div className="inquiry-copy">
          <p className="overline-v5">PRIVATE BERATUNG</p>
          <h1 id="inquiry-title">Projekt anfragen.</h1>
          <p className="inquiry-intro">
            Sprechen Sie direkt mit Ihrem Ansprechpartner über Ihr LED-Heimkino.
          </p>

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

            <a href={`mailto:${email}`} className="inquiry-contact-link">
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
    </main>
  );
}
