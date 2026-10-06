import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LED oder Beamer im Heimkino?",
  description:
    "LED oder Beamer im Heimkino: Unterschiede bei Raumlicht, Projektion, Bildgröße und Einbau kompakt erklärt.",
  alternates: {
    canonical: "/led-oder-beamer",
  },
  openGraph: {
    title: "LED oder Beamer im Heimkino?",
    description:
      "Die wichtigsten Unterschiede zwischen Direct View LED und Projektion.",
    url: "/led-oder-beamer",
  },
};

export default function LedOrProjectorPage() {
  return (
    <main className="seo-page">
      <header className="models-nav seo-nav">
        <a href="/" className="brand-v5" aria-label="CINEMA N°7 Startseite">
          CINEMA N°7
        </a>
        <a href="/led-heimkino" className="models-back">
          LED-Heimkino
        </a>
      </header>

      <section className="seo-hero">
        <p className="overline-v5">LED ODER BEAMER</p>
        <h1>Zwei Wege zum großen Bild.</h1>
        <p>
          Projektion und Direct View LED lösen dieselbe Aufgabe unterschiedlich.
          Entscheidend sind Raum, Licht und der Anspruch an das Bild.
        </p>
      </section>

      <section className="seo-compare">
        <article>
          <h2>Raumlicht</h2>
          <div>
            <strong>LED</strong>
            <p>Das Bild bleibt auch bei vollem Raumlicht präsent.</p>
          </div>
          <div>
            <strong>Beamer</strong>
            <p>Für hohen Kontrast ist ein dunkler Raum deutlich wichtiger.</p>
          </div>
        </article>

        <article>
          <h2>Projektionsweg</h2>
          <div>
            <strong>LED</strong>
            <p>Kein Projektor und kein freier Lichtweg durch den Raum.</p>
          </div>
          <div>
            <strong>Beamer</strong>
            <p>Projektor, Optik und Projektionsdistanz müssen eingeplant werden.</p>
          </div>
        </article>

        <article>
          <h2>Bildfläche</h2>
          <div>
            <strong>LED</strong>
            <p>Die Bildfläche selbst besteht aus modularer LED-Technik.</p>
          </div>
          <div>
            <strong>Beamer</strong>
            <p>Das Bild wird auf eine separate Leinwand projiziert.</p>
          </div>
        </article>
      </section>

      <section className="seo-choice">
        <div>
          <p className="overline-v5">CINEMA N°7</p>
          <h2>Wir konzentrieren uns auf LED.</h2>
        </div>
        <div className="seo-choice-actions">
          <a href="/led-heimkino">Mehr zu LED</a>
          <a href="/produkte">Modelle ansehen</a>
        </div>
      </section>
    </main>
  );
}
