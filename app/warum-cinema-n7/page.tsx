import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Warum CINEMA N°7?",
  description: "LED-Heimkino auch bei Tageslicht. Über zehn Jahre LED-Erfahrung, persönliche Planung, Full-Service und Betreuung nach der Installation.",
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
          Großes Kino, auch bei Tageslicht. Ohne Beamer und Leinwand.
          Persönlich geplant, von uns installiert und präzise eingestellt.
          Mit über zehn Jahren LED-Erfahrung und einem Ansprechpartner,
          der auch danach für Sie da ist.
        </p>
      </section>
      <section className="editorial-rows" aria-label="Warum unser LED-Heimkino und warum CINEMA N°7">
        <article>
          <h2>Das Bild.</h2>
          <div>
            <p>Brillante Farben, hoher Kontrast und eine große Bildfläche, die auch
              bei Tageslicht überzeugt. Die LEDs erzeugen das Bild direkt.
              Sie brauchen keinen Beamer, keine Leinwand und keinen Projektionsweg
              durch den Raum.</p>
            <a href="/led-oder-beamer">LED und Projektion vergleichen</a>
          </div>
        </article>
        <article>
          <h2>Ihr Heimkino.</h2>
          <div>
            <p>Wir planen Bildgröße, Sitzabstand und Lichtverhältnisse gemeinsam
              mit Ihnen. So passt Ihr LED-Heimkino zu Ihrem Zuhause und zu der Art,
              wie Sie Kino erleben möchten. Dazu planen wir ein maßgeschneidertes
              Soundsystem mit immersivem Raumklang. Individuell für Ihr Heimkino.</p>
            <a href="/produkte">Ihr Modell entdecken</a>
          </div>
        </article>
        <article>
          <h2>Unsere Erfahrung.</h2>
          <div>
            <p>Seit über zehn Jahren arbeiten wir mit professioneller LED-Technik.
              Diese Erfahrung fließt in die Auswahl Ihres Systems, den präzisen
              Aufbau und die Kalibrierung ein. Wir stimmen die Bildwiedergabe
              vor Ort ab und zeigen Ihnen, wie Sie Ihr Heimkino bedienen.</p>
            <a href="/ueber-uns">Lernen Sie uns kennen</a>
          </div>
        </article>
        <article>
          <h2>Ihre Sicherheit.</h2>
          <div>
            <p>Ein klarer Komplettpreis für LED-Wand, Controller, Unterkonstruktion,
              Montage, Inbetriebnahme und Kalibrierung. Ihr persönlicher
              Ansprechpartner begleitet die Umsetzung und bleibt auch nach der
              Installation für Sie da. Bei Fragen, Störungen oder gewünschten
              Anpassungen kümmern wir uns persönlich um Ihre Anlage.</p>
            <a href="/leistungen">Unseren Full-Service ansehen</a>
          </div>
        </article>
      </section>
      <section className="seo-choice">
        <div>
          <h2>Selbst erleben.</h2>
          <p>Sehen Sie sich das Bild in unserem Showroom in Paderborn an.
            Bei einer persönlichen Vorführung besprechen wir Ihre Vorstellungen
            und die Möglichkeiten für Ihr Zuhause.</p>
        </div>
        <div className="seo-choice-actions">
          <a href="/anfrage#showroom">Vorführung vereinbaren</a>
        </div>
      </section>
    </main>
  );
}