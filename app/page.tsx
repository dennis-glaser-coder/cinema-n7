"use client";

import Image from "next/image";
import FlowerImageCompare from "./flower-image-compare";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroCinemaImage from "../Luxuriöses Heimkino mit Leopardenbild.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SiteHeader from "../components/site-header";

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
      const intro = gsap.timeline({ defaults: { ease: "power2.out" } });

      intro
        .fromTo(".nav-v5", { opacity: 0 }, { opacity: 1, duration: 0.45 })
        .fromTo(
          ".hero-content > *",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.65, stagger: 0.06 },
          "-=.2"
        )
        .fromTo(
          ".hero-cinema-image",
          {
            opacity: isMobile ? 1 : 0,
          },
          {
            opacity: 1,
            scale: 1,
            duration: isMobile ? 0.3 : 0.7,
          },
          "-=.6"
        );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: isMobile ? 10 : 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
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
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".led-reasons-list-v11",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".delivery-step-v11",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".delivery-steps-v11",
            start: "top 82%",
            once: true,
          },
        }
      );

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

        <SiteHeader home />

        <div className="hero-layout">
          <div className="hero-content">
            <h1>
              Exklusive
              <br />
              LED-Heimkinos
            </h1>
            <p className="hero-sub">
              Abgestimmt auf Ihren Raum. Und Ihren Anspruch.
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
          <h2 id="led-reasons-title">
            Heimkino.
            <br />
            <span className="home-heading-line">Ohne Kompromisse.</span>
          </h2>
          <p className="led-reasons-lede-v11">
            Fine-Pitch LED mit 1,25 mm Pixelabstand, sechs Bildgrößen und
            persönlicher Begleitung bis zum fertigen Heimkino.
          </p>
          <a href="/warum-cinema-n7" className="text-link-v5">
            Warum CINEMA N°7?
          </a>
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
        </div>
      </section>

      <section className="home-models-v11" aria-labelledby="home-models-title">
        <div className="home-models-copy-v11 reveal">
          <h2 id="home-models-title">
            Die passende Größe
            <br />
            für Ihren Raum.
          </h2>
          <p>
            Modulare Bauweise im 16:9 Format. Jedes Modell kommt als schlüsselfertig
            installiertes LED-Heimkino – inklusive Montage, Einrichtung und Kalibrierung.
          </p>

          <div className="home-models-range-v11">
            <p className="home-models-range-label-v11">VON 136 BIS 271 ZOLL</p>
            <div className="home-models-range-values-v11" aria-label="Bildgrößen von 136 bis 271 Zoll">
              <span>136<span className="inch-v11">″</span></span>
              <span className="range-dash-v11" aria-hidden="true">—</span>
              <span>271<span className="inch-v11">″</span></span>
            </div>
            <a href="/produkte" className="text-link-v5">
              Modelle &amp; Preise ansehen
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
        </a>
      </section>

      <section className="system-v6" aria-labelledby="system-title">
        <div className="system-visual-v6 reveal">
          <FlowerImageCompare />
        </div>

        <div className="system-copy-v6 reveal">
          <h2 id="system-title"><span>Brillante Farben,</span><span>perfekter Kontrast</span></h2>
          <p>
            Erleben Sie Farben in ihrer ganzen Pracht, tiefes Schwarz und die feinsten Details.
          </p>
          <a href="/led-oder-beamer" className="text-link-v5">
            LED und Beamer vergleichen
          </a>
        </div>
      </section>

      <section
        className="delivery-v11"
        id="delivery"
        aria-labelledby="delivery-title"
      >
        <div className="delivery-proof-v11 reveal">
          <h2 id="delivery-title">
            Großes Kino.
            <br />
            Ganz privat.
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
          <div className="delivery-intro reveal">
            <h3>Full-Service.</h3>
            <p>
              Von der LED-Wand bis zur Kalibrierung – alles im Komplettpreis.
            </p>
          </div>
          <div className="delivery-steps-v11">
            {delivery.map(([title, description]) => (
              <article className="delivery-step-v11" key={title}>
                <strong>{title}</strong>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="cn7-home-services-link">
            <a className="text-link-v5" href="/leistungen">Unsere Leistungen ansehen</a>
          </div>
        </div>
      </section>

      <section className="contact-v5" id="contact">
        <div className="contact-mark" aria-hidden="true">
          <Image src="/cinema-n7-logo.svg" alt="" width={1268} height={136} />
        </div>
        <div className="contact-copy reveal">
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

    </main>
  );
}