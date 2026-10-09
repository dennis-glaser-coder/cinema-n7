import SiteHeader from "../../components/site-header";
import type { Metadata } from "next";
import styles from "./comparison.module.css";

export const metadata: Metadata = {
  title: "LED-Wand oder Beamer? Heimkino im Vergleich",
  description:
    "LED-Wand oder Beamer fürs Heimkino? Vergleichen Sie Bildwirkung bei Tageslicht, Projektionsweg und Bildgröße und finden Sie die passende Technik für Ihren Raum.",
  alternates: {
    canonical: "/led-oder-beamer",
  },
  openGraph: {
    title: "LED statt Beamer | CINEMA N°7",
    description:
      "LED und klassische Projektion im Vergleich. CINEMA N°7 setzt ausschließlich auf LED-Heimkinos.",
    url: "/led-oder-beamer",
  },
};

const differences = [
  {
    topic: "Raumlicht",
    led: "Das Bild bleibt auch bei Tageslicht präsent. Der Raum muss nicht vollständig abgedunkelt werden.",
    beamer: "Für einen hohen Kontrast ist eine stärkere Abdunkelung des Raums wichtig.",
  },
  {
    topic: "Projektionsweg",
    led: "Das Bild entsteht direkt auf der LED-Fläche. Ein Projektor und ein freier Lichtweg entfallen.",
    beamer: "Projektor, Optik und Projektionsabstand müssen im Raum eingeplant werden.",
  },
  {
    topic: "Bildfläche",
    led: "Die Bildwand besteht aus einzelnen LED-Modulen. Ihre Größe wird passend zum Raum geplant.",
    beamer: "Das Bild wird auf eine separate Leinwand oder Projektionsfläche geworfen.",
  },
];

export default function LedOrProjectorPage() {
  return (
    <main className={`seo-page ${styles.page}`}>
      <SiteHeader />

      <section className={styles.hero} aria-labelledby="comparison-title">
        <div className={styles.heroInner}>
          <div>
            <p className={styles.eyebrow}>LED ODER BEAMER</p>
            <h1 id="comparison-title" className={styles.heroTitle}>
              LED statt
              <br />
              Beamer.
            </h1>
          </div>
          <div className={styles.heroAside}>
            <p className={styles.heroStatement}>
              CINEMA N°7 setzt ausschließlich auf LED-Heimkinos.
            </p>
            <p className={styles.heroDescription}>
              Hier zeigen wir, wie sich LED und klassische Projektion bei
              Raumlicht, Bildfläche und Planung unterscheiden.
            </p>
            <a className={styles.jumpLink} href="#vergleich">
              Unterschiede ansehen <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className={styles.comparison}
        id="vergleich"
        aria-labelledby="differences-title"
      >
        <div className={styles.columnHeader}>
          <div className={styles.headingBlock}>
            <p className={styles.eyebrow}>DER VERGLEICH</p>
            <h2 id="differences-title">Die Unterschiede.</h2>
          </div>
          <div className={styles.ledHeading}>
            <span className={styles.headingNumber}>UNSERE TECHNIK</span>
            <strong>CINEMA N°7 LED</strong>
          </div>
          <div className={styles.beamerHeading}>
            <span className={styles.headingNumber}>ZUM VERGLEICH</span>
            <strong>Klassischer Beamer</strong>
          </div>
        </div>

        <div className={styles.comparisonRows}>
          {differences.map((item) => (
            <article className={styles.row} key={item.topic}>
              <div className={styles.topicBlock}>
                <h3>{item.topic}</h3>
              </div>
              <div className={`${styles.value} ${styles.ledValue}`}>
                <span className={styles.mobileLabel}>CINEMA N°7 LED</span>
                <p>{item.led}</p>
              </div>
              <div className={`${styles.value} ${styles.beamerValue}`}>
                <span className={styles.mobileLabel}>Klassischer Beamer</span>
                <p>{item.beamer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.nextStep} aria-labelledby="next-step-title">
        <div className={styles.nextStepCopy}>
          <p className={styles.eyebrow}>CINEMA N°7</p>
          <h2 id="next-step-title">Unsere LED-Heimkinos.</h2>
          <p>Alle Modelle und Bildgrößen im Überblick.</p>
        </div>
        <div className={styles.actions}>
          <a className={styles.primaryAction} href="/produkte">
            Modelle entdecken <span aria-hidden="true">↗</span>
          </a>
          <a className={styles.secondaryAction} href="/anfrage">
            Persönliche Beratung <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
