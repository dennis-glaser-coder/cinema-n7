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
          <p className="overline-v5">ÜBER UNS</p>
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
        <p className="overline-v5">PRIVATE BERATUNG</p>
        <h2>Ihr LED-Heimkino.</h2>
        <a href="/anfrage" className="models-next-link-v2">
          Projekt anfragen
        </a>
      </section>
    </main>
  );
}
