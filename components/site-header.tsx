"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navigation = [
  { label: "Modelle & Preise", href: "/produkte" },
  { label: "Warum CINEMA N°7?", href: "/warum-cinema-n7" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
];

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={home ? "nav-v5 cn7-global-header cn7-global-header-home" : "models-nav cn7-global-header cn7-global-header-inner"}>
      <a className="brand-v5 cn7-global-logo" href="/" aria-label="CINEMA N°7 – Startseite">
        <Image src="/cinema-n7-logo.svg" alt="CINEMA N°7" width={1268} height={136} className="cn7-wordmark" priority />
      </a>
      <nav className="cn7-global-links" aria-label="Hauptnavigation">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="cn7-global-cta" href="/anfrage">
        Beratung anfragen <span aria-hidden="true">↗</span>
      </a>
      <button
        className="cn7-global-menu-toggle"
        type="button"
        onClick={() => setMenuOpen((value) => !value)}
        aria-expanded={menuOpen}
        aria-controls="cn7-mobile-menu"
      >
        {menuOpen ? "Schließen" : "Menü"}
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>
      <nav id="cn7-mobile-menu" className={menuOpen ? "cn7-global-mobile-menu is-open" : "cn7-global-mobile-menu"} aria-label="Mobile Navigation" hidden={!menuOpen}>
        {navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <a href="/anfrage" className="cn7-mobile-cta" onClick={() => setMenuOpen(false)}>Beratung anfragen ↗</a>
      </nav>
    </header>
  );
}