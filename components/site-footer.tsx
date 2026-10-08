export default function SiteFooter() {
  return (
    <footer className="footer-v5 cn7-global-footer">
      <div className="cn7-footer-brand">
        <a href="/" aria-label="CINEMA N°7 – Startseite">CINEMA N°7</a>
        <span>Exklusive LED-Heimkinos · Deutschland &amp; Europa</span>
      </div>
      <nav aria-label="Footernavigation" className="cn7-footer-links">
        <a href="/produkte">Modelle &amp; Preise</a>
        <a href="/warum-cinema-n7">Warum CINEMA N°7?</a>
        <a href="/leistungen">Leistungen</a>
        <a href="/ueber-uns">Über uns</a>
        <a href="/anfrage">Beratung anfragen</a>
      </nav>
      <div className="cn7-footer-legal">
        <a href="/impressum">Impressum</a>
        <a href="/datenschutz">Datenschutz</a>
        <span>© 2026 CINEMA N°7</span>
      </div>
    </footer>
  );
}
