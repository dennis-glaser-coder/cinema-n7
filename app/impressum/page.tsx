import SiteHeader from "../../components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von CINEMA N°7.",
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImprintPage() {
  return (
    <main className="legal-page">
      <SiteHeader />

      <section className="legal-content">
        <p className="overline-v5">RECHTLICHES</p>
        <h1>Impressum.</h1>

        <div className="legal-block">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Emotive Systems GmbH
            <br />
            Hohenloher Weg 44
            <br />
            33102 Paderborn
          </p>
        </div>

        <div className="legal-block">
          <h2>Kontakt</h2>
          <p>
            Telefon: <a href="tel:+4952515449191">+49 (0) 5251 5449191</a>
            <br />
            Telefax: +49 (0) 521 92271026
            <br />
            E-Mail: <a href="mailto:info@cinema7.de">info@cinema7.de</a>
          </p>
        </div>

        <div className="legal-block">
          <h2>Registereintrag</h2>
          <p>
            Registergericht: Amtsgericht Paderborn
            <br />
            Registernummer: HRB 12339
          </p>
        </div>

        <div className="legal-block">
          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer: DE305749988</p>
        </div>

        <div className="legal-block">
          <h2>Geschäftsführung</h2>
          <p>Nikita Dohrenkamp, Stephan Gehle</p>
        </div>

        <div className="legal-block">
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
          </p>
        </div>
      </section>
    </main>
  );
}
