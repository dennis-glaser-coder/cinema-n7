import type { Metadata } from "next";
import type { ReactNode } from "react";
import SiteHeader from "../../components/site-header";
import { cabinet, cinemaModels, formatEuro } from "../../lib/cinema-products";

export const metadata: Metadata = {
  title: "LED-Heimkino FAQ: Kosten, Planung und Installation",
  description:
    "Antworten zu LED-Heimkino Kosten, Sitzabstand, 4K-Auflösung, Full-Service und Installation. Persönliche Vorführung im Showroom in Paderborn.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Fragen zum LED-Heimkino | CINEMA N°7",
    description:
      "Kosten, Bildgröße, Raumplanung und Full-Service: Antworten zu Ihrem LED-Heimkino und zum Showroom in Paderborn.",
    url: "/faq",
  },
};

function Question({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="faq-question">
      <summary>{title}<span aria-hidden="true" className="faq-toggle" /></summary>
      <div className="faq-answer">{children}</div>
    </details>
  );
}

export default function FaqPage() {
  const smallestModel = cinemaModels[0];

  return (
    <main className="seo-page faq-page">
      <SiteHeader />
      <section className="seo-hero faq-hero">
        <h1>Fragen zum<br />LED-Heimkino.</h1>
        <p>Was Sie vor der Entscheidung wissen möchten: Kosten, Bildqualität,
          die Planung Ihres Raums und unser Full-Service.</p>
      </section>

      <nav className="faq-topics" aria-label="FAQ-Themen">
        <a href="#auswahl">Kosten &amp; Auswahl</a>
        <a href="#bild">Bild &amp; Raum</a>
        <a href="#technik">Technik &amp; Betrieb</a>
        <a href="#service">Beratung &amp; Service</a>
      </nav>

      <div className="faq-sections">
        <section className="faq-group" id="auswahl" aria-labelledby="faq-auswahl-title">
          <h2 id="faq-auswahl-title">Kosten &amp; Auswahl.</h2>
          <div className="faq-list">
            <Question title="Was kostet eine LED-Wand für das Heimkino inklusive Installation?">
              <p>Unsere Modelle beginnen bei {formatEuro(smallestModel.grossPriceEur)} inklusive
                Mehrwertsteuer für {smallestModel.diagonalInches} Zoll. Der Komplettpreis umfasst
                LED-Wand, Controller, Unterkonstruktion, Anfahrt, Montage, Inbetriebnahme und
                Kalibrierung. Ein ergänzendes Soundsystem ist optional.</p>
              <a href="/produkte">Alle Modelle und Komplettpreise ansehen</a>
            </Question>
            <Question title="LED-Wand, großer Fernseher oder Beamer: Was passt zu meinem Zuhause?">
              <p>Entscheidend sind Bildgröße, Sitzabstand, Lichtverhältnisse und die Nutzung
                Ihres Raums. Eine LED-Wand verbindet eine große, modular aufgebaute Bildfläche
                mit direkter Bildwiedergabe ohne Projektionsweg. Ein Fernseher kann bei kleineren
                Bildgrößen passen; eine Projektion kommt insbesondere für einen gezielt
                abgedunkelten Kinoraum infrage.</p>
              <a href="/led-oder-beamer">LED und Beamer vergleichen</a>
            </Question>
            <Question title="Welche Bildgrößen bietet CINEMA N°7?">
              <p>Sie wählen aus sechs Bildgrößen von {smallestModel.diagonalInches} bis
                {" "}{cinemaModels[cinemaModels.length - 1].diagonalInches} Zoll im 16:9-Format.
                Die passende Größe bestimmen wir gemeinsam anhand Ihrer Wandfläche,
                Sitzposition und gewünschten Bildwirkung.</p>
            </Question>
          </div>
        </section>

        <section className="faq-group" id="bild" aria-labelledby="faq-bild-title">
          <h2 id="faq-bild-title">Bild &amp; Raum.</h2>
          <div className="faq-list">
            <Question title="Kann ich eine LED-Wand in mein bestehendes Wohnzimmer integrieren?">
              <p>Eine LED-Wand benötigt keinen Projektionsabstand und kann auch in einem
                bestehenden Wohnraum installiert werden. Dafür prüfen wir die verfügbare
                Wandfläche, Befestigung, Stromversorgung und Kabelwege. Die Integration
                stimmen wir auf Ihren Raum ab.</p>
            </Question>
            <Question title="Welchen Sitzabstand brauche ich für ein LED-Heimkino?">
              <p>Bildgröße und Sitzabstand gehören zusammen. Unsere Modelle haben einen
                Pixelabstand von {cabinet.pixelPitchMm.toLocaleString("de-DE")} mm.
                Bei sehr kurzem Abstand können einzelne Bildpunkte sichtbar werden.
                Wir berücksichtigen Ihre Sitzposition bei der Auswahl. Im Showroom in
                Paderborn können Sie die Bildwirkung persönlich beurteilen.</p>
              <a href="/anfrage#showroom">Vorführung vereinbaren</a>
            </Question>
            <Question title="Kann ich das LED-Heimkino bei Tageslicht nutzen?">
              <p>Ja. Die LED-Wand erzeugt das Bild direkt auf ihrer Oberfläche und lässt
                sich auch in hellen Räumen nutzen. Fenster, direkte Sonneneinstrahlung
                und mögliche Reflexionen berücksichtigen wir bei der Planung.
                Die Lichtverhältnisse beeinflussen die Bildwirkung weiterhin.</p>
            </Question>
            <Question title="Sind einzelne Pixel oder Übergänge zwischen den Modulen sichtbar?">
              <p>Die Wahrnehmung hängt unter anderem vom Sitzabstand, Blickwinkel und
                gezeigten Inhalt ab. Für ein gleichmäßiges Bild sind die präzise Ausrichtung
                der Module und ihre Abstimmung wichtig. Montage und Kalibrierung gehören
                deshalb zu unserem Full-Service. Bei einer Vorführung können Sie sich
                selbst ein Bild machen.</p>
            </Question>
            <Question title="Welche Modelle haben native 4K-Auflösung?">
              <p>Die native Auflösung steigt mit der Bildgröße. Das
                {" "}{cinemaModels.find((model) => model.resolutionX === 3840)?.diagonalInches}-Zoll-Modell
                besitzt 3.840 × 2.160 Bildpunkte und entspricht UHD/4K. Größere Modelle
                haben mehr, kleinere Modelle weniger native Bildpunkte.</p>
              <ul className="faq-resolution-list">
                {cinemaModels.map((model) => (
                  <li key={model.id}><a href={`/produkte/${model.id}`}>{model.diagonalInches} Zoll</a>
                    <span>{model.resolutionX.toLocaleString("de-DE")} × {model.resolutionY.toLocaleString("de-DE")} Pixel</span></li>
                ))}
              </ul>
              <p>Die Auflösung eines zugespielten Films und die native Auflösung der
                LED-Wand sind unterschiedliche Angaben.</p>
            </Question>
          </div>
        </section>

        <section className="faq-group" id="technik" aria-labelledby="faq-technik-title">
          <h2 id="faq-technik-title">Technik &amp; Betrieb.</h2>
          <div className="faq-list">
            <Question title="Welche Technik steuert die LED-Wand?">
              <p>Wir setzen auf professionelle LED-Ansteuerung von NovaStar.
                Den Controller konfigurieren wir passend zu Ihrer LED-Wand und
                den angeschlossenen Bildquellen.</p>
            </Question>
            <Question title="Welche Zuspielgeräte und Streaming-Lösungen kann ich verwenden?">
              <p>Die Bildquelle liefert den Inhalt; der NovaStar-Controller übernimmt
                die Ansteuerung der LED-Wand. Welche Zuspielgeräte angeschlossen werden
                können, hängt vom eingesetzten Controller und seinen Anschlüssen ab.
                Ihre gewünschten Bildquellen berücksichtigen wir in der Planung.</p>
            </Question>
            <Question title="Wie wird ein Soundsystem mit der LED-Wand kombiniert?">
              <p>Auf Wunsch ergänzen wir Ihr LED-Heimkino um ein maßgeschneidertes
                Soundsystem. Die Auswahl und Positionierung der Lautsprecher richten
                sich nach Ihrem Raum, Ihren Hörgewohnheiten und der gewünschten
                Gestaltung. Das Soundsystem ist eine zusätzliche Ausstattung.</p>
            </Question>
            <Question title="Welche Voraussetzungen braucht der Raum für die Installation?">
              <p>Wir berücksichtigen Wandaufbau und Befestigung, Platz für die
                Unterkonstruktion, Stromanschlüsse, Kabelwege und Zugang für den Service.
                Auch die Wärmeabfuhr gehört zur technischen Planung. Die Anforderungen
                hängen vom gewählten Modell und der Einbausituation ab.</p>
            </Question>
            <Question title="Wie viel Strom verbraucht die LED-Wand und wie viel Wärme entsteht?">
              <p>Der Verbrauch hängt von Bildfläche, Helligkeit und Bildinhalt ab.
                Die maximale Anschlussleistung ist nicht mit dem typischen Verbrauch
                beim Filmschauen gleichzusetzen. Stromversorgung und Wärmeabfuhr
                müssen auf das konkrete Modell und Ihren Raum abgestimmt werden.
                Diese Punkte klären wir in der technischen Planung.</p>
            </Question>
            <Question title="Was passiert, wenn ein LED-Modul oder einzelne Bildpunkte ausfallen?">
              <p>Die Bildfläche besteht aus einzelnen LED-Modulen, die gezielt gewartet
                oder ausgetauscht werden können. Bei einem Fehler muss deshalb nicht
                grundsätzlich die gesamte Bildfläche ersetzt werden. Den konkreten
                Reparaturablauf und die für Ihr System geltenden Service- und
                Garantiebedingungen klären wir mit Ihnen persönlich.</p>
            </Question>
            <Question title="Kann die LED-Wand später vergrößert werden?">
              <p>Eine modulare Bauweise bedeutet nicht, dass sich eine bereits installierte
                Wand jederzeit beliebig erweitern lässt. Neue Module müssen technisch
                und optisch zum bestehenden System passen. Wenn Sie eine spätere
                Erweiterung planen, besprechen wir die Möglichkeiten bereits bei der Auswahl.</p>
            </Question>
          </div>
        </section>

        <section className="faq-group" id="service" aria-labelledby="faq-service-title">
          <h2 id="faq-service-title">Beratung &amp; Service.</h2>
          <div className="faq-list">
            <Question title="Kann ich das LED-Heimkino vor dem Kauf erleben?">
              <p>Ja. In unserem Showroom in Paderborn können Sie sich persönlich
                ein Bild machen. Vereinbaren Sie mit uns einen Termin für Ihre Vorführung.</p>
              <a href="/anfrage#showroom">Termin im Showroom anfragen</a>
            </Question>
            <Question title="Übernimmt CINEMA N°7 Beratung, Planung und Installation?">
              <p>Ja. Unser Full-Service umfasst persönliche Beratung, Planung,
                Montage, Inbetriebnahme und Kalibrierung. Wir stimmen die Umsetzung
                auf Ihren Raum und Ihre Wünsche ab.</p>
            </Question>
            <Question title="Wie schnell ist mein LED-Heimkino verfügbar?">
              <p>Unsere Modelle sind aktuell sofort verfügbar und können innerhalb
                weniger Tage geliefert werden. Den Termin für die Installation und
                Inbetriebnahme vereinbaren wir nach Ihren Wünschen und in gemeinsamer Absprache.</p>
            </Question>
          </div>
        </section>
      </div>

      <section className="seo-choice faq-contact">
        <div><h2>Persönlich erleben.</h2><p>Besuchen Sie unseren Showroom in Paderborn.</p></div>
        <div className="seo-choice-actions">
          <a href="/anfrage#showroom">Vorführung vereinbaren</a>
          <a href="/produkte">Modelle &amp; Preise ansehen</a>
        </div>
      </section>
    </main>
  );
}
