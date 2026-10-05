"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const formats = [
  {
    name: "N°7 3.6",
    size: "3,60 × 2,03 m",
    inches: '163"',
    resolution: "2880 × 1620",
    cabinets: "36 Cabinets",
  },
  {
    name: "N°7 4.2",
    size: "4,20 × 2,36 m",
    inches: '190"',
    resolution: "3360 × 1890",
    cabinets: "49 Cabinets",
  },
  {
    name: "N°7 4.8",
    size: "4,80 × 2,70 m",
    inches: '217"',
    resolution: "3840 × 2160",
    cabinets: "64 Cabinets",
    featured: "NATIVE 4K",
  },
];

const delivery = [
  ["01", "Konfiguration", "Bildgröße, Pixelpitch und native Auflösung."],
  ["02", "LED-System", "Cabinets, Processing, Signal und Strom."],
  ["03", "Installation", "Mechanik, Aufbau und Inbetriebnahme."],
  ["04", "Kalibrierung", "Farbe, Helligkeit und Gleichmäßigkeit."],
];

export default function Home() {
  const root = useRef<HTMLElement | null>(null);
  const [videoReady, setVideoReady] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-content > *",
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.09,
          ease: "power3.out",
          delay: 0.12,
        }
      );

      gsap.fromTo(
        ".hero-product",
        { opacity: 0, scale: 0.965 },
        { opacity: 1, scale: 1, duration: 1.35, ease: "power3.out", delay: 0.28 }
      );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.to(".hero-product-screen", {
        yPercent: 3,
        scale: 1.025,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-v5",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="site-v5">
      <section className="hero-v5" id="top">
        <div className="hero-backdrop" aria-hidden="true">
          {videoReady && (
            <video
              className="hero-video-v5"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onError={() => setVideoReady(false)}
            >
              <source src="/media/hero.mp4" type="video/mp4" />
            </video>
          )}
          <div className="hero-backdrop-fallback" />
          <div className="hero-backdrop-grid" />
        </div>

        <header className="nav-v5">
          <a className="brand-v5" href="#top" aria-label="CINEMA N°7 Startseite">
            CINEMA N°7
          </a>
          <nav aria-label="Hauptnavigation">
            <a href="#system">Bildsystem</a>
            <a href="#formats">Größen</a>
            <a href="#delivery">Leistung</a>
          </nav>
          <a className="nav-cta-v5" href="#contact">
            Private Beratung
          </a>
        </header>

        <div className="hero-layout">
          <div className="hero-content">
            <p className="overline-v5">CINEMA N°7</p>
            <h1>
              Exklusive
              <br />
              LED-Heimkinos
            </h1>
            <p className="hero-sub">
              Fine-Pitch LED-Bildsysteme ab 3,60 Meter Bildbreite.
            </p>
            <div className="hero-facts">
              <span>P1.25</span>
              <span>16:9</span>
              <span>Native 4K ab 4,80 m</span>
            </div>
            <a className="text-link-v5" href="#formats">
              Größen ansehen <span>↘</span>
            </a>
          </div>

          <div className="hero-product" aria-hidden="true">
            <div className="hero-product-frame">
              <div className="hero-product-screen" />
            </div>
            <div className="hero-product-meta">
              <span>FINE-PITCH LED</span>
              <span>MODULAR / 16:9</span>
            </div>
          </div>
        </div>
      </section>

      <section className="system-v5" id="system">
        <div className="section-head-v5 reveal">
          <p className="overline-v5">DAS BILDSYSTEM</p>
          <h2>LED statt Projektion.</h2>
          <p>
            Die Bildfläche besteht aus modularen LED-Cabinets. Kein Projektor,
            kein Objektiv, kein separater Lichtweg.
          </p>
        </div>

        <div className="system-layout">
          <div className="system-visual reveal" aria-hidden="true">
            <div className="matrix-v5" />
          </div>

          <div className="system-specs reveal">
            <article>
              <span>01</span>
              <strong>600 × 337,5 mm</strong>
              <p>Cabinet-Format</p>
            </article>
            <article>
              <span>02</span>
              <strong>480 × 270</strong>
              <p>Pixel pro Cabinet</p>
            </article>
            <article>
              <span>03</span>
              <strong>1,25 mm</strong>
              <p>Pixelpitch</p>
            </article>
          </div>
        </div>
      </section>

      <section className="formats-v5" id="formats">
        <div className="formats-title-v5 reveal">
          <div>
            <p className="overline-v5">P1.25</p>
            <h2>Drei Größen. Eine klare Linie.</h2>
          </div>
          <p>
            Der Einstieg beginnt bewusst bei 3,60 Meter Bildbreite. Ab 4,80
            Metern erreicht die Bildfläche native 4K UHD.
          </p>
        </div>

        <div className="format-grid-v5">
          {formats.map((format) => (
            <article
              className={`format-v5 reveal ${format.featured ? "is-featured" : ""}`}
              key={format.name}
            >
              <div className="format-top-v5">
                <span>{format.name}</span>
                {format.featured && <strong>{format.featured}</strong>}
              </div>
              <div className="format-size-v5">{format.size}</div>
              <div className="format-data-v5">
                <span>{format.inches}</span>
                <span>{format.resolution}</span>
                <span>{format.cabinets}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="delivery-v5" id="delivery">
        <div className="delivery-visual reveal" aria-hidden="true">
          <div className="delivery-screen" />
        </div>

        <div className="delivery-content">
          <div className="section-head-v5 reveal">
            <p className="overline-v5">WAS WIR LIEFERN</p>
            <h2>Vom Cabinet zum fertigen Bild.</h2>
          </div>

          <div className="delivery-list">
            {delivery.map(([number, title, description]) => (
              <article className="delivery-row reveal" key={number}>
                <span>{number}</span>
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
          <p>
            3,60 m. 4,20 m. 4,80 m. Oder größer. Wir klären Bildgröße,
            Auflösung und Einbausituation persönlich.
          </p>
          <div className="contact-action-v5">
            <span>Projekt besprechen</span>
            <span>↗</span>
          </div>
        </div>
      </section>

      <footer className="footer-v5">
        <span>CINEMA N°7</span>
        <span>FINE-PITCH LED</span>
        <span>DEUTSCHLAND / EUROPA</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
