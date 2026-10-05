"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroCinemaImage from "../Luxuriöses Heimkino mit Erde im All.png";
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
        ".delivery-row",
        { opacity: 0, x: isMobile ? 24 : 48 },
        {
          opacity: 1,
          x: 0,
          duration: 1.05,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".delivery-list",
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

      gsap.fromTo(
        ".system-screen-v6",
        { scale: isMobile ? 1.01 : 1.02 },
        {
          scale: isMobile ? 1.055 : 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".system-v6",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
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
            <a href="#system">Bildsystem</a>
            <a href="/produkte">Modelle</a>
            <a href="#delivery">Leistung</a>
          </nav>
          <a className="nav-cta-v5" href="#contact">
            Private Beratung
          </a>
        </header>

        <div className="hero-layout">
          <div className="hero-content">
            <h1>
              Exklusive
              <br />
              LED-Heimkinos
            </h1>
            <p className="hero-sub">
              Großformatige LED-Bildsysteme für private Heimkinos.
            </p>
            <a className="text-link-v5" href="/produkte">
              Modelle entdecken
            </a>
          </div>


        </div>
      </section>

      <section className="home-models-v7" aria-labelledby="home-models-title">
        <div className="home-models-head reveal">
          <h2 id="home-models-title">Modelle</h2>
        </div>

        <a
          className="home-models-stage reveal"
          href="/produkte"
          aria-label="Modelle ansehen"
        >
          <div className="home-models-room" aria-hidden="true">
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

      <section className="system-v6" id="system">
        <div className="system-visual-v6 reveal" aria-hidden="true">
          <div className="system-screen-v6" />
        </div>

        <div className="system-copy-v6 reveal">
          <p className="overline-v5">DAS BILD</p>
          <h2>LED statt Projektion.</h2>
          <p>Eine großformatige Bildfläche, die selbst leuchtet.</p>
          <a href="/produkte" className="text-link-v5">
            Modelle ansehen
          </a>
        </div>
      </section>

      <section className="delivery-v5 delivery-v7" id="delivery">
        <div className="section-head-v5 reveal">
          <p className="overline-v5">WAS WIR LIEFERN</p>
          <h2>Vom System zum fertigen Bild.</h2>
        </div>

        <div className="delivery-list">
          {delivery.map(([title, description]) => (
            <article className="delivery-row" key={title}>
              <strong>{title}</strong>
              <p>{description}</p>
            </article>
          ))}
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
            <a className="contact-action-v5" href="#contact">
              <span>Projekt besprechen</span>
             
            </a>
          </div>
        </div>
      </section>

      <footer className="footer-v5">
        <span>CINEMA N°7</span>
        <span>LED-HEIMKINOS</span>
        <span>DEUTSCHLAND / EUROPA</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
