import type { Metadata } from "next";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Leistungen",
  description: "Persönliche Beratung, Planung, Montage und Kalibrierung für schlüsselfertige LED-Heimkinos von CINEMA N°7.",
  alternates: { canonical: "/leistungen" },
  openGraph: {
    title: "Full-Service für Ihr LED-Heimkino",
    description: "Beratung, Planung, Montage, Einrichtung und Kalibrierung. Persönliche Umsetzung durch CINEMA N°7.",
    url: "/leistungen",
  },
};

export default function ServicesPage() {
  return (
    <main className="seo-page detail-editorial-page">
      <SiteHeader />
      <section className="seo-hero">
        <h1>Full-Service.<br />Von Anfang an.</h1>
        <p>
          Beratung, Planung und Installation gehören bei uns zusammen.
          Wir stimmen die Umsetzung auf Ihren Raum und Ihre Wünsche ab.
        </p>
      </section>
      <section className="editorial-service" aria-labelledby="service-steps-title">
        <h2 id="service-steps-title">So entsteht Ihr Heimkino.</h2>
        <ol className="editorial-service-grid">
          <li><span aria-hidden="true">01</span><h3>Beratung &amp; Auswahl.</h3>
            <p>Wir sprechen über Ihren Raum, Ihre Sitzposition und die gewünschte
              Bildgröße. Im Showroom in Paderborn können Sie das Bild persönlich erleben.</p></li>
          <li><span aria-hidden="true">02</span><h3>Technische Planung.</h3>
            <p>Unterkonstruktion, Befestigung, Anschlüsse und Kabelwege werden auf
              die Einbausituation abgestimmt. Stromversorgung und Wärmeabfuhr
              berücksichtigen wir dabei ebenfalls.</p></li>
          <li><span aria-hidden="true">03</span><h3>Montage &amp; Einrichtung.</h3>
            <p>Wir montieren die Unterkonstruktion und LED-Module, richten die
              Bildfläche aus und konfigurieren die Ansteuerung. Den Installationstermin
              vereinbaren wir mit Ihnen.</p></li>
          <li><span aria-hidden="true">04</span><h3>Kalibrierung &amp; Übergabe.</h3>
            <p>Bei der Inbetriebnahme prüfen wir das System und stimmen die
              Bildwiedergabe ab. Anschließend zeigen wir Ihnen die Bedienung Ihrer Anlage.</p></li>
        </ol>
      </section>
      <section className="editorial-inclusions" aria-labelledby="included-title">
        <div><h2 id="included-title">Im Komplettpreis enthalten.</h2>
          <p>Der ausgewiesene Modellpreis umfasst die LED-Anlage und ihre Installation.
            Ein Soundsystem und gegebenenfalls erforderliche Arbeiten am Raum
            betrachten wir separat.</p></div>
        <ul><li>LED-Wand</li><li>NovaStar-Ansteuerung</li><li>Unterkonstruktion</li>
          <li>Anfahrt &amp; Montage</li><li>Einrichtung &amp; Inbetriebnahme</li><li>Kalibrierung</li></ul>
      </section>
      <section className="editorial-rows" aria-label="Ergänzende Leistungen und Verfügbarkeit">
        <article><h2>Auch der Klang gehört dazu.</h2><p>Auf Wunsch ergänzen wir
          Ihr LED-Heimkino um ein maßgeschneidertes Soundsystem. Lautsprecher,
          Positionierung und Gestaltung stimmen wir auf Ihren Raum ab.
          Die zusätzliche Ausstattung wird separat angeboten.</p></article>
        <article><h2>Innerhalb weniger Tage verfügbar.</h2><p>Unsere Modelle sind
          aktuell sofort verfügbar und können innerhalb weniger Tage geliefert werden.
          Installation und Inbetriebnahme planen wir nach Ihren Wünschen und in
          gemeinsamer Absprache.</p></article>
      </section>
      <section className="seo-choice">
        <div>
          <h2>Ihr LED-Heimkino.</h2>
          <p>Besprechen Sie Ihr Projekt mit uns oder besuchen Sie unseren Showroom.</p>
        </div>
        <div className="seo-choice-actions">
          <a href="/produkte">Modelle &amp; Preise ansehen</a>
          <a href="/anfrage">Projekt anfragen</a>
        </div>
      </section>
    </main>
  );
}
