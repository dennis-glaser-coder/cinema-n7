import Image from "next/image";
import contactPhoto from "../../ChatGPT Image 8. Mai 2026, 13_02_39.png";

const phoneDisplay = "+49 (0) 5251 5449191";
const phoneHref = "tel:+4952515449191";
const email = "kontakt@cinema7.de";

export default function InquiryPage() {
  return (
    <main className="inquiry-page">
      <header className="models-nav inquiry-nav">
        <a href="/" className="brand-v5" aria-label="CINEMA N°7 Startseite">
          CINEMA N°7
        </a>
        <a href="/" className="models-back">
          Zurück
        </a>
      </header>

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
