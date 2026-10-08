"use client";

import Image from "next/image";
import FlowerImageCompare from "./flower-image-compare";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroCinemaImage from "../Luxuriöses Heimkino mit Leopardenbild.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const delivery = [
  ["Konfiguration", "Bildgröße und passendes LED-System."],
  ["Integration", "Mechanik, Processing, Signal und Strom."],
  ["Installation", "Aufbau und Inbetriebnahme vor Ort."],
  ["Kalibrierung", "Das fertige Bild wird präzise abgestimmt."],
];

export default function Home() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 820px)").matches;
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .fromTo(".nav-v5", { opacity: 0 }, { opacity: 1, duration: 0.8 })
        .fromTo(
          ".hero-content > *",
          { opacity: 0, y: 26 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.09 },
          "-=.35"
        )
        .fromTo(
          ".hero-cinema-image",
          {
            opacity: isMobile ? 1 : 0,
            scale: isMobile ? 1.01 : 1.035,
          },
          {
            opacity: 1,
            scale: 1,
            duration: isMobile ? 0.3 : 1.2,
          },
          "-=1"
        );

      gsap.to(".hero-cinema-image", {
        scale: isMobile ? 1.045 : 1.13,
        yPercent: isMobile ? 1.5 : 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-v5",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-content", {
        yPercent: isMobile ? -4 : -12,
        opacity: isMobile ? 0.65 : 0.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-v5",
          start: "32% top",
          end: "bottom top",
          scrub: 0.85,
        },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: isMobile ? 24 : 48 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".led-reason-v11",
        { opacity: 0, x: isMobile ? 24 : 48 },
        {
          opacity: 1,
          x: 0,
          duration: 1.05,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".led-reasons-list-v11",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".delivery-step-v11",
        { opacity: 0, x: isMobile ? 24 : 48 },
        {
          opacity: 1,
          x: 0,
          duration: 1.05,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".delivery-steps-v11",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".system-visual-v6",
        { scale: isMobile ? 0.985 : 0.965, yPercent: isMobile ? 2 : 5 },
        {
          scale: isMobile ? 1.01 : 1.025,
          yPercent: isMobile ? -1.5 : -4,
          ease: "none",
          scrollTrigger: {
            trigger: ".system-v6",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.to(".contact-mark", {
        xPercent: isMobile ? -1.5 : -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-v5",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="site-v5">
      <section className="hero-v5" id="top">
        <div className="hero-backdrop" aria-hidden="true">
          <div className="hero-cinema-image">
            <Image
              className="hero-cinema-media"
              src={heroCinemaImage}
              alt=""
              priority
              sizes="100vw"
              quality={82}
            />
          </div>
          <div className="hero-cinema-overlay" />
        </div>

        <header className="nav-v5">
          <a className="brand-v5" href="#top" aria-label="CINEMA N°7 Startseite">
            CINEMA N°7
          </a>
          <nav aria-label="Hauptnavigation">
            <a href="#system">LED</a>
            <a href="/produkte">Modelle</a>
            <a href="#delivery">Leistung</a>
            <a href="/ueber-uns">Über uns</a>
          </nav>
          <a className="nav-cta-v5" href="/anfrage">
            Private Beratung
          </a>

          <nav className="mobile-nav-v9" aria-label="Mobile Navigation">
            <a href="/produkte">Modelle</a>
            <a href="/ueber-uns">Über uns</a>
            <a href="/anfrage">Anfrage</a>
          </nav>
        </header>

        <div className="hero-layout">
          <div className="hero-content">
            <h1>
              Exklusive
              <br />
              LED-Heimkinos
            </h1>
            <p className="hero-sub">
              Großformatige LED-Systeme für private Räume. Geplant, installiert und kalibriert.
            </p>
            <a className="text-link-v5" href="/produkte">
              Modelle entdecken
            </a>
          </div>


        </div>
      </section>

      <section
        className="cinema-animation-v10"
        aria-labelledby="cinema-animation-title"
        data-animation-slot="cinema-n7-intro"
      >
        <div className="cinema-animation-copy-v10 reveal">
          <p className="overline-v5">CINEMA N°7</p>
          <h2 id="cinema-animation-title">Modulare Fine-Pitch LED-Technologie.</h2>
        </div>

        <div
          className="cinema-animation-stage-v10 reveal"
          aria-label="Animation CINEMA N°7"
        >
          <video
            className="cinema-animation-video-v10"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src="https://raw.githubusercontent.com/dennis-glaser-coder/cinema-n7/main/Fabulux_T_COB_Cinema.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section
        className="led-reasons-v11"
        id="system"
        aria-labelledby="led-reasons-title"
      >
        <div className="led-reasons-intro-v11 reveal">
          <p className="overline-v5">WARUM LED</p>
          <h2 id="led-reasons-title">
            Großes Bild.
            <br />
            Ohne Projektion.
          </h2>
          <p className="led-reasons-lede-v11">
            Fine-Pitch LED leuchtet selbst. Das verändert, wie sich ein großes Bild
            in einen privaten Raum integrieren lässt.
          </p>
          <div className="led-pitch-v12" aria-label="Pixel Pitch 1,25 Millimeter">
            <p className="overline-v5">EIN STANDARD. JEDE BILDGRÖSSE.</p>
            <div className="led-pitch-value-v12">
              <strong>1,25</strong>
              <span>mm</span>
            </div>
            <p className="led-pitch-label-v12">
              <strong>Pixel Pitch.</strong> Derselbe feine Pixelabstand – von der
              kleinsten bis zur größten CINEMA-N°7-Bildwand.
            </p>
          </div>
        </div>

        <div className="led-reasons-detail-v11">
          <div className="led-reasons-list-v11">
            <article className="led-reason-v11">
              <strong>Präsent, auch bei Tageslicht.</strong>
              <p>Hohe Helligkeit und Kontrast, ohne den Raum vollständig abdunkeln zu müssen.</p>
            </article>
            <article className="led-reason-v11">
              <strong>Kein Projektionsweg.</strong>
              <p>Kein Beamer, keine Leinwand und kein Projektionsabstand im Raum.</p>
            </article>
            <article className="led-reason-v11">
              <strong>Modular aufgebaut.</strong>
              <p>Die Bildfläche entsteht aus einzelnen, gezielt wartbaren LED-Modulen.</p>
            </article>
          </div>
          <div className="led-guide-links-v9 reveal">
            <a href="/led-heimkino">LED-Heimkino verstehen</a>
            <a href="/led-oder-beamer">LED oder Beamer?</a>
          </div>
        </div>
      </section>

      <section className="home-models-v11" aria-labelledby="home-models-title">
        <div className="home-models-copy-v11 reveal">
          <p className="overline-v5">DIE BILDGRÖSSEN</p>
          <h2 id="home-models-title">
            Die passende Größe
            <br />
            für Ihren Raum.
          </h2>
          <p>
            Sechs 16:9-Formate. Der Größenvergleich zeigt die tatsächlichen
            Abmessungen jeder LED-Bildfläche.
          </p>

          <div className="home-models-range-v11">
            <p className="home-models-range-label-v11">VON 136 BIS 271 ZOLL</p>
            <div className="home-models-range-values-v11" aria-label="Bildgrößen von 136 bis 271 Zoll">
              <span>136<span className="inch-v11">″</span></span>
              <span className="range-dash-v11" aria-hidden="true">—</span>
              <span>271<span className="inch-v11">″</span></span>
            </div>
            <a href="/produkte" className="home-models-range-link-v11">
              Bildgrößen vergleichen
            </a>
          </div>
        </div>

        <a
          className="home-models-stage home-models-preview-v11 reveal"
          href="/produkte"
          aria-label="LED-Größenvergleich mit einer Person ansehen"
        >
          <div className="home-models-room" aria-hidden="true">
            <div className="home-models-ghost home-models-ghost-small" />
            <div className="home-models-ghost home-models-ghost-large" />
            <div className="home-models-person" />
            <div className="home-models-wall">
              <div className="home-models-wall-image" />
              <div className="home-models-wall-grid">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
            </div>
          </div>
          <span className="home-models-preview-caption-v11">
            Größenwirkung im Vergleich zum Menschen
          </span>
        </a>
      </section>

      <section className="system-v6" aria-labelledby="system-title">
        <div className="system-visual-v6 reveal" aria-hidden="true">
          <FlowerImageCompare />
        </div>

        <div className="system-copy-v6 reveal">
          <p className="overline-v5">DAS BILD IM RAUM</p>
          <h2 id="system-title">LED statt Projektion.</h2>
          <p>
            Großformatige Bildwirkung, direkt aus der LED-Fläche. Ohne
            Projektionsweg, geplant für die Architektur Ihres Raums.
          </p>
          <a href="/produkte" className="text-link-v5">
            Modelle ansehen
          </a>
        </div>
      </section>

      <section
        className="delivery-v11"
        id="delivery"
        aria-labelledby="delivery-title"
      >
        <div className="delivery-proof-v11 reveal">
          <p className="overline-v5">ERFAHRUNG &amp; UMSETZUNG</p>
          <h2 id="delivery-title">
            Bis zum
            <br />
            fertigen Bild.
          </h2>
          <div className="delivery-experience-v11">
            <strong>10+</strong>
            <div>
              <span>Jahre LED-Erfahrung</span>
              <a href="/ueber-uns">Mehr über uns</a>
            </div>
          </div>
        </div>

        <div className="delivery-process-v11">
          <p className="delivery-promise-v11 reveal">
            Ein Ansprechpartner begleitet Ihr Projekt – von der Auswahl der
            Bildgröße bis zur Installation und Kalibrierung.
          </p>
          <div className="delivery-steps-v11">
            {delivery.map(([title, description]) => (
              <article className="delivery-step-v11" key={title}>
                <strong>{title}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-v5" id="contact">
        <div className="contact-mark" aria-hidden="true">
          N°7
        </div>
        <div className="contact-copy reveal">
          <p className="overline-v5">PRIVATE BERATUNG</p>
          <h2>Ihr LED-Heimkino.</h2>
          <div className="contact-links-v6">
            <a className="contact-action-v5" href="/produkte">
              <span>Modelle entdecken</span>
             
            </a>
            <a className="contact-action-v5" href="/anfrage">
              <span>Projekt anfragen</span>
             
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-v5">
        <span>CINEMA N°7</span>
        <span>LED-HEIMKINOS</span>
        <span>DEUTSCHLAND / EUROPA</span>
        <span className="footer-legal-v9">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <span>© 2026</span>
        </span>
      </footer>
    </main>
  );
}
