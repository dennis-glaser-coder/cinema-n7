import SiteHeader from "../../components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LED-Wand für Zuhause: Technik und Vorteile",
  description:
    "LED-Wand fürs Wohnzimmer und private Heimkino: Direct View LED ohne Projektor. Erfahren Sie mehr über Tageslicht, Bildgröße und modulare Technik.",
  alternates: {
    canonical: "/led-heimkino",
  },
  openGraph: {
    title: "LED-Wand für Zuhause: Technik und Vorteile",
    description:
      "Was Direct View LED im privaten Heimkino anders macht.",
    url: "/led-heimkino",
  },
};

export default function LedHomeCinemaPage() {
  return (
    <main className="seo-page">
      <SiteHeader />

      <section className="seo-hero">
        <p className="overline-v5">LED-HEIMKINO</p>
        <h1>LED im Heimkino.</h1>
        <p>
          Direct View LED ersetzt Projektor und Leinwand durch eine
          großformatige LED-Fläche. Das Bild bleibt auch bei vollem Raumlicht
          präsent und benötigt keinen Projektionsweg.
        </p>
      </section>

      <section className="seo-facts">
        <article>
          <h2>Volles Raumlicht.</h2>
          <p>
            Hohe Helligkeit und hoher Kontrast machen eine vollständige
            Abdunkelung des Raums nicht zur Voraussetzung.
          </p>
        </article>
        <article>
          <h2>Keine Projektion.</h2>
          <p>
            Kein Beamer, keine Leinwand und kein freier Projektionsweg vor dem
            Bild.
          </p>
        </article>
        <article>
          <h2>Große Bildflächen.</h2>
          <p>
            Die Bildfläche wird aus einzelnen LED-Modulen aufgebaut und kann
            deutlich über klassische TV-Größen hinausgehen.
          </p>
        </article>
        <article>
          <h2>Modular aufgebaut.</h2>
          <p>
            Die Fläche besteht aus einzelnen Modulen, die gezielt gewartet
            werden können.
          </p>
        </article>
      </section>

      <section className="seo-choice">
        <div>
          <p className="overline-v5">MODELLE</p>
          <h2>136 bis 271 Zoll.</h2>
        </div>
        <div className="seo-choice-actions">
          <a href="/produkte">Modelle &amp; Preise ansehen</a>
          <a href="/anfrage">Persönlich beraten lassen</a>
          <a href="/led-oder-beamer">LED und Beamer vergleichen</a>
        </div>
      </section>
    </main>
  );
}
