"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const navigation = [
  { label: "Modelle & Preise", href: "/produkte" },
  { label: "Warum CINEMA N°7?", href: "/warum-cinema-n7" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
];

function CtaArrow() {
  return (
    <svg className="cn7-cta-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteHeader({ home = false }: { home?: boolean }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [floatingMenuOpen, setFloatingMenuOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () => setFloating(window.scrollY > 160);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!floating) setFloatingMenuOpen(false);
  }, [floating]);

  return (
    <>
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
        Beratung anfragen <CtaArrow />
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
        <a href="/anfrage" className="cn7-mobile-cta" onClick={() => setMenuOpen(false)}>Beratung anfragen <CtaArrow /></a>
      </nav>
    </header>
    {mounted && floating && createPortal(
      <header className="cn7-scroll-header cn7-global-header" aria-label="Navigation beim Scrollen">
        <a className="cn7-global-logo" href="/" aria-label="CINEMA N°7 – Startseite">
          <Image src="/cinema-n7-logo.svg" alt="CINEMA N°7" width={1268} height={136} className="cn7-wordmark" />
        </a>
        <nav className="cn7-global-links" aria-label="Seitennavigation">
          {navigation.map((item) => <a key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</a>)}
        </nav>
        <a className="cn7-global-cta" href="/anfrage">Beratung anfragen <CtaArrow /></a>
        <button className="cn7-global-menu-toggle" type="button" aria-expanded={floatingMenuOpen} aria-controls="cn7-scroll-menu" onClick={() => setFloatingMenuOpen((open) => !open)}>
          {floatingMenuOpen ? "Schließen" : "Menü"}
          <span aria-hidden="true">{floatingMenuOpen ? "×" : "☰"}</span>
        </button>
        <nav id="cn7-scroll-menu" aria-label="Navigation beim Scrollen – mobil" className={floatingMenuOpen ? "cn7-global-mobile-menu is-open" : "cn7-global-mobile-menu"} hidden={!floatingMenuOpen}>
          {navigation.map((item) => <a href={item.href} key={item.href} onClick={() => setFloatingMenuOpen(false)}>{item.label}</a>)}
          <a href="/anfrage" className="cn7-mobile-cta" onClick={() => setFloatingMenuOpen(false)}>Beratung anfragen <CtaArrow /></a>
        </nav>
      </header>, document.body
    )}
    </>
  );
}