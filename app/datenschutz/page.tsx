import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von CINEMA N°7.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <header className="models-nav legal-nav">
        <a href="/" className="brand-v5" aria-label="CINEMA N°7 Startseite">
          CINEMA N°7
        </a>
        <a href="/" className="models-back">
          Zurück
        </a>
      </header>

      <section className="legal-content">
        <p className="overline-v5">RECHTLICHES</p>
        <h1>Datenschutz.</h1>

        <div className="legal-block">
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p>
            Emotive Systems GmbH
            <br />
            Hohenloher Weg 44
            <br />
            33102 Paderborn
            <br />
            Deutschland
          </p>
          <p>
            Telefon: <a href="tel:+4952515449191">+49 (0) 5251 5449191</a>
            <br />
            E-Mail: <a href="mailto:kontakt@cinema7.de">kontakt@cinema7.de</a>
          </p>
        </div>

        <div className="legal-block">
          <h2>2. Hosting durch Vercel</h2>
          <p>
            Diese Website wird über Vercel bereitgestellt. Anbieter ist Vercel
            Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA.
          </p>
          <p>
            Beim Aufruf der Website können technisch erforderliche
            Verbindungsdaten verarbeitet werden. Dazu können insbesondere
            IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
            Referrer-Informationen, Browsertyp und Betriebssystem gehören. Die
            Verarbeitung ist erforderlich, um die Website auszuliefern sowie
            Stabilität und Sicherheit zu gewährleisten.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
            Interesse liegt in der sicheren und zuverlässigen Bereitstellung
            unseres Internetauftritts.
          </p>
          <p>
            Vercel kann Daten auch außerhalb der Europäischen Union bzw. des
            Europäischen Wirtschaftsraums verarbeiten. Nach Angaben von Vercel
            werden hierfür die nach dem anwendbaren Datenschutzrecht
            erforderlichen Transfermechanismen eingesetzt, insbesondere die
            EU-Standardvertragsklauseln.
          </p>
          <p>
            Weitere Informationen zum Datenschutz bei Vercel finden Sie unter{" "}
            <a
              href="https://vercel.com/legal/privacy-notice"
              target="_blank"
              rel="noreferrer"
            >
              vercel.com/legal/privacy-notice
            </a>
            .
          </p>
        </div>

        <div className="legal-block">
          <h2>3. Kontakt per E-Mail oder Telefon</h2>
          <p>
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir
            die von Ihnen mitgeteilten Daten, um Ihre Anfrage zu bearbeiten und
            mit Ihnen zu kommunizieren.
          </p>
          <p>
            Soweit Ihre Anfrage der Vorbereitung oder Durchführung eines
            Vertrags dient, erfolgt die Verarbeitung auf Grundlage von Art. 6
            Abs. 1 lit. b DSGVO. In anderen Fällen erfolgt sie auf Grundlage
            unseres berechtigten Interesses an der Bearbeitung Ihrer Anfrage
            gemäß Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </div>

        <div className="legal-block">
          <h2>4. Speicherdauer</h2>
          <p>
            Personenbezogene Daten speichern wir nur so lange, wie dies für den
            jeweiligen Zweck erforderlich ist. Anschließend werden die Daten
            gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten oder
            sonstigen Rechtsgründe einer Löschung entgegenstehen.
          </p>
        </div>

        <div className="legal-block">
          <h2>5. Cookies und Tracking</h2>
          <p>
            Auf dieser Website setzen wir derzeit keine Analyse- oder
            Marketing-Trackingdienste und keine entsprechenden
            Einwilligungs-Cookies ein. Sollte sich dies künftig ändern, wird
            diese Datenschutzerklärung entsprechend angepasst und, soweit
            erforderlich, eine Einwilligung eingeholt.
          </p>
        </div>

        <div className="legal-block">
          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht
            auf Auskunft über Ihre personenbezogenen Daten, Berichtigung,
            Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit.
            Außerdem können Sie einer Verarbeitung, die auf Art. 6 Abs. 1 lit.
            f DSGVO beruht, aus Gründen widersprechen, die sich aus Ihrer
            besonderen Situation ergeben.
          </p>
          <p>
            Zur Ausübung Ihrer Rechte genügt eine Nachricht an{" "}
            <a href="mailto:kontakt@cinema7.de">kontakt@cinema7.de</a>.
          </p>
        </div>

        <div className="legal-block">
          <h2>7. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
            über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
            Zuständig ist insbesondere die Aufsichtsbehörde Ihres gewöhnlichen
            Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
            Verstoßes.
          </p>
        </div>

        <div className="legal-block">
          <h2>8. Stand</h2>
          <p>Stand: Oktober 2026</p>
        </div>
      </section>
    </main>
  );
}
