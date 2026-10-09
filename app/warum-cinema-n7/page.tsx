import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../../components/site-header";
import hdrImage from "../../fire-hdr.webp";

export const metadata: Metadata = {
  title: "Warum CINEMA N°7?",
  description: "Warum Direct View LED für Ihr Heimkino: HDR, brillante Farben, hohe Helligkeit bei Tageslicht und eine modulare Bildfläche ohne Projektion.",
  alternates: { canonical: "/warum-cinema-n7" },
  openGraph: {
    title: "Warum CINEMA N°7?",
    description: "Große Bildfläche, HDR und brillante Farben auch bei Tageslicht. Entdecken Sie die Vorteile unserer LED-Heimkinos.",
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
          Für Kino müssen Sie Ihr Zuhause nicht vollständig abdunkeln.
          Unsere LED-Heimkinos verbinden eine große Bildfläche mit hoher
          Helligkeit, präziser Farbwiedergabe und HDR.
        </p>
      </section>
      <section className="why-hdr-feature" aria-labelledby="why-hdr-title">
        <div className="why-hdr-image">
          <Image src={hdrImage} alt="Leuchtende Flammen und feine Funken vor dunklem Hintergrund" sizes="(max-width: 820px) 100vw, 60vw" />
          <span className="why-hdr-label">HDR</span>
        </div>
        <div className="why-hdr-copy">
          <h2 id="why-hdr-title">Mehr Tiefe.<br />Mehr Details.</h2>
          <p>Ein Lichtreflex, die Glut eines Feuers, feine Schatten.
            HDR bietet einen erweiterten Dynamikumfang für die Abstufungen
            zwischen hellen und dunklen Bildbereichen. Unsere LED-Heimkinos
            unterstützen die Wiedergabe von HDR-Inhalten.</p>
        </div>
      </section>
      <section className="editorial-rows" aria-label="Die Vorteile unseres LED-Heimkinos">
        <article>
          <h2>Kino bei Tageslicht.</h2>
          <div>
            <p>Die hohe Helligkeit der LED-Bildfläche macht Filme, Konzerte und
              Sport auch bei Tageslicht sichtbar. Ihr Wohnzimmer kann ein
              Wohnzimmer bleiben. Für den Filmabend müssen Sie es nicht
              vollständig abdunkeln.</p>
          </div>
        </article>
        <article>
          <h2>Das Bild entsteht direkt.</h2>
          <div>
            <p>Jeder Bildpunkt leuchtet auf der LED-Wand selbst. Es gibt keinen
              Lichtstrahl durch den Raum, keinen Projektionsabstand und keine
              Leinwand. Wer vor dem Bild vorbeigeht, wirft keinen
              Projektionsschatten darauf.</p>
            <a href="/led-oder-beamer">LED und Projektion vergleichen</a>
          </div>
        </article>
        <article>
          <h2>Groß. Und modular.</h2>
          <div>
            <p>Aus einzelnen LED-Modulen entsteht eine zusammenhängende Bildfläche
              im 16:9-Format. So lassen sich große Bildgrößen realisieren und
              einzelne Module bei Bedarf gezielt warten oder austauschen.</p>
            <a href="/produkte">Die passende Bildgröße entdecken</a>
          </div>
        </article>
        <article>
          <h2>Mittendrin.</h2>
          <div>
            <p>Die große Bildfläche nimmt mehr von Ihrem Blickfeld ein.
              Ein maßgeschneidertes Soundsystem mit immersivem Raumklang
              ergänzt das Bild. Wir stimmen Bildgröße, Sitzposition und
              Soundsystem auf Ihr Heimkino ab.</p>
          </div>
        </article>
      </section>
      <section className="seo-choice">
        <div>
          <h2>Selbst erleben.</h2>
          <p>Über zehn Jahre LED-Erfahrung stehen hinter der Auswahl und
            Abstimmung unserer Systeme. Erleben Sie das Ergebnis bei einer
            persönlichen Vorführung in unserem Showroom in Paderborn.</p>
        </div>
        <div className="seo-choice-actions">
          <a href="/anfrage#showroom">Vorführung vereinbaren</a>
        </div>
      </section>
    </main>
  );
}