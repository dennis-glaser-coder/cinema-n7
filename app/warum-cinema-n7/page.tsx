import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Warum CINEMA N°7?",
  description: "CINEMA N°7 verbindet P1.25 LED-Technologie, individuelle Planung und schlüsselfertige Installation.",
  alternates: { canonical: "/warum-cinema-n7" },
  openGraph: {
    title: "Warum CINEMA N°7?",
    description: "Persönliche Planung, professionelle LED-Ansteuerung und Full-Service für Ihr privates Heimkino.",
    url: "/warum-cinema-n7",
  },
};

export default function WhyCinemaN7Page() {
  return (
    <main className="seo-page detail-editorial-page">
      <SiteHeader />
      <section className="seo-hero">
        <h1>Ihr Kino.<br />Unser Anspruch.</h1>
        <p>
          Eine große Bildfläche gehört zu Ihrem Kino. Genauso wichtig ist,
          wie sie in Ihren Raum passt. Bei CINEMA N°7 planen wir beides zusammen.
        </p>
      </section>
      <section className="editorial-statements" aria-label="Was CINEMA N°7 auszeichnet">
        <article><strong>10+</strong><p>Jahre Erfahrung mit professioneller LED-Technik.</p></article>
        <article><strong>6</strong><p>Bildgrößen von 136 bis 271 Zoll.</p></article>
        <article><strong>1,25 <small>mm</small></strong><p>Pixelabstand bei allen aktuellen Modellen.</p></article>
      </section>
      <section className="editorial-rows" aria-label="Unser Anspruch an Ihr Heimkino">
        <article><h2>Ihr Raum gibt den Rahmen vor.</h2><p>Wir betrachten Wandfläche,
          Sitzposition und Lichtverhältnisse gemeinsam. Daraus entsteht die passende
          Auswahl für Ihr Zuhause – im Wohnzimmer oder im eigenen Kinoraum.</p></article>
        <article><h2>Das Bild im Detail.</h2><div><p>Fine-Pitch LED, professionelle
          Ansteuerung von NovaStar und präzise ausgerichtete Module bilden die Grundlage.
          Bei der Inbetriebnahme stimmen wir die Bildwiedergabe durch Kalibrierung ab.</p>
          <a href="/led-heimkino">Unsere LED-Technik kennenlernen</a></div></article>
        <article><h2>Persönlich begleitet.</h2><p>Von der Beratung über die Planung
          bis zur Installation begleiten wir Ihr Projekt. Sie besprechen Ihre
          Vorstellungen mit uns; wir kümmern uns um die technische Umsetzung.</p></article>
        <article><h2>Ein vollständiges Angebot.</h2><div><p>Die ausgewiesenen
          Komplettpreise enthalten LED-Wand, Controller, Unterkonstruktion, Anfahrt,
          Montage, Inbetriebnahme und Kalibrierung. Ein passendes Soundsystem
          planen wir auf Wunsch als zusätzliche Ausstattung.</p>
          <a href="/leistungen">Unseren Full-Service ansehen</a></div></article>
      </section>
      <section className="seo-choice">
        <div>
          <h2>Lernen Sie Ihr Kino kennen.</h2>
          <p>Persönliche Vorführung in unserem Showroom in Paderborn.</p>
        </div>
        <div className="seo-choice-actions">
          <a href="/produkte">Modelle &amp; Preise ansehen</a>
          <a href="/anfrage#showroom">Vorführung vereinbaren</a>
        </div>
      </section>
    </main>
  );
}
