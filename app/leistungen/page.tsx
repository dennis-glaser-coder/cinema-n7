import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Persönliche Beratung, Planung, Montage und Kalibrierung für schlüsselfertige LED-Heimkinos von CINEMA N°7.",
  alternates: { canonical: "/leistungen" },
  robots: { index: false, follow: true },
};

export default function ServicesPage() {
  return (
    <main className="seo-page">
      <SiteHeader />
      <section className="seo-hero">
        <p className="overline-v5">UNSER SERVICE</p>
        <h1>Unsere Leistungen.</h1>
        <p>
          Wir begleiten Ihr LED-Heimkino von der Auswahl der Bildgröße bis zum
          fertigen Bild – einschließlich Montage, Inbetriebnahme und Kalibrierung.
        </p>
      </section>
      <section className="seo-choice">
        <div>
          <p className="overline-v5">DER NÄCHSTE SCHRITT</p>
          <h2>Ihr LED-Heimkino.</h2>
        </div>
        <div className="seo-choice-actions">
          <a href="/produkte">Modelle &amp; Preise ansehen</a>
          <a href="/anfrage">Projekt anfragen</a>
        </div>
      </section>
    </main>
  );
}
