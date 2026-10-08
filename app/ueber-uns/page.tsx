import SiteHeader from "../../components/site-header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über 10 Jahre LED-Erfahrung",
  description:
    "CINEMA N°7 steht für über zehn Jahre Erfahrung mit professioneller LED-Technik und mehr als 300 Kunden.",
  alternates: {
    canonical: "/ueber-uns",
  },
  openGraph: {
    title: "Über 10 Jahre LED-Erfahrung",
    description:
      "Mehr als zehn Jahre Erfahrung mit professioneller LED-Technik.",
    url: "/ueber-uns",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />

      <section className="about-hero">
        <div className="about-intro">
          <h1>Über zehn Jahre LED-Erfahrung.</h1>
          <p>
            Hinter CINEMA N°7 stehen mehr als zehn Jahre Erfahrung mit
            anspruchsvollen LED-Projekten. Heute konzentrieren wir dieses
            Know-how auf großformatige LED-Heimkinos für private Räume.
          </p>
        </div>

        <div className="about-stats" aria-label="Erfahrung">
          <article>
            <strong>10+</strong>
            <span>Jahre LED-Erfahrung</span>
          </article>
          <article>
            <strong>300+</strong>
            <span>Kunden</span>
          </article>
        </div>
      </section>

      <section className="about-principle">
        <div>
          <p className="overline-v5">PERSÖNLICH</p>
          <h2>Ein Ansprechpartner. Von Anfang an.</h2>
        </div>
        <p>
          Von der Auswahl der passenden Größe über die technische Planung bis
          zur Installation und Kalibrierung begleiten wir Ihr Projekt
          persönlich und direkt.
        </p>
      </section>

      <section className="about-contact">
        <h2>Persönlich in Paderborn.</h2>
        <p className="editorial-showroom-copy">In unserem Showroom können Sie unsere LED-Heimkinos
          vor Ihrer Entscheidung erleben. Wir sprechen über Ihre Vorstellungen
          und die Möglichkeiten für Ihren Raum. Vereinbaren Sie einen Termin mit uns.</p>
        <div className="cn7-inline-actions cn7-about-products">
          <a href="/produkte">Modelle &amp; Preise entdecken</a>
          <a href="/anfrage#showroom">Vorführung vereinbaren</a>
        </div>
      </section>
    </main>
  );
}
