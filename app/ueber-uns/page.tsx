export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="models-nav about-nav">
        <a href="/" className="brand-v5" aria-label="CINEMA N°7 Startseite">
          CINEMA N°7
        </a>
        <a href="/" className="models-back">
          Zurück
        </a>
      </header>

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
            <strong>30+</strong>
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
