import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Warum CINEMA N°7?",
  description: "CINEMA N°7 verbindet P1.25 LED-Technologie, individuelle Planung und schlüsselfertige Installation.",
  alternates: { canonical: "/warum-cinema-n7" },
  robots: { index: false, follow: true },
};

export default function WhyCinemaN7Page() {
  return (
    <main className="seo-page">
      <SiteHeader />
      <section className="seo-hero">
        <p className="overline-v5">CINEMA N°7</p>
        <h1>Warum CINEMA N°7?</h1>
        <p>
          Fein aufgelöste LED-Bilder mit 1,25 mm Pixel Pitch – in sechs Größen.
          Persönlich geplant und schlüsselfertig installiert.
        </p>
      </section>
      <section className="seo-choice">
        <div>
          <p className="overline-v5">ENTDECKEN</p>
          <h2>Unsere LED-Heimkinos.</h2>
        </div>
        <div className="seo-choice-actions">
          <a href="/produkte">Modelle &amp; Preise ansehen</a>
          <a href="/anfrage">Beratung anfragen</a>
        </div>
      </section>
    </main>
  );
}
