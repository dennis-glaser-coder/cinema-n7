"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const delivery = [
  ["01", "Konfiguration", "Bildgröße und passendes LED-System."],
  ["02", "Integration", "Mechanik, Processing, Signal und Strom."],
  ["03", "Installation", "Aufbau und Inbetriebnahme vor Ort."],
  ["04", "Kalibrierung", "Das fertige Bild wird präzise abgestimmt."],
];

export default function Home() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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
          { opacity: 0, scale: 1.035 },
          { opacity: 1, scale: 1, duration: 1.5 },
          "-=1"
        );

      gsap.to(".hero-cinema-image", {
        scale: 1.13,
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-v5",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-content", {
        yPercent: -12,
        opacity: 0.08,
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
          { opacity: 0, y: 48 },
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
        { opacity: 0.25, x: 18 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".delivery-list",
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".system-visual-v6",
        { scale: 0.965, yPercent: 5 },
        {
          scale: 1.025,
          yPercent: -4,
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
        { scale: 1.02 },
        {
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: ".system-v6",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
          },
        }
      );

      gsap.to(".brand-interlude-art", {
        scale: 1.12,
        rotate: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".brand-interlude-v6",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.fromTo(
        ".delivery-visual",
        { scale: 0.97, yPercent: 5 },
        {
          scale: 1.035,
          yPercent: -3,
          ease: "none",
          scrollTrigger: {
            trigger: ".delivery-v5",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.15,
          },
        }
      );

      gsap.to(".contact-mark", {
        xPercent: -5,
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
          <div className="hero-cinema-image" />
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
            <p className="overline-v5">CINEMA N°7</p>
            <h1>
              Exklusive
              <br />
              LED-Heimkinos
            </h1>
            <p className="hero-sub">
              Großformatige LED-Bildsysteme für private Heimkinos.
            </p>
            <a className="text-link-v5" href="/produkte">
              Modelle entdecken <span>↗</span>
            </a>
          </div>


        </div>
      </section>

      <section className="system-v6" id="system">
        <div className="system-visual-v6 reveal" aria-hidden="true">
          <div className="system-screen-v6" />
        </div>

        <div className="system-copy-v6 reveal">
          <p className="overline-v5">DAS BILD</p>
          <h2>LED statt Projektion.</h2>
          <p>
            Eine großformatige Bildfläche, die selbst leuchtet. Modular aufgebaut,
            als vollständiges System geliefert und präzise kalibriert.
          </p>
          <a href="/produkte" className="text-link-v5">
            Modelle ansehen <span>↗</span>
          </a>
        </div>
      </section>

      <section className="brand-interlude-v6" aria-label="CINEMA N°7">
        <div className="brand-interlude-art" aria-hidden="true" />
        <div className="brand-interlude-copy reveal">
          <span>CINEMA</span>
          <strong>N°7</strong>
        </div>
      </section>

      <section className="delivery-v5" id="delivery">
        <div className="delivery-visual reveal" aria-hidden="true">
          <div className="delivery-screen" />
        </div>

        <div className="delivery-content">
          <div className="section-head-v5 reveal">
            <p className="overline-v5">WAS WIR LIEFERN</p>
            <h2>Vom System zum fertigen Bild.</h2>
          </div>

          <div className="delivery-list">
            {delivery.map(([number, title, description]) => (
              <article className="delivery-row" key={number}>
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
            Wählen Sie zunächst Ihre gewünschte Bildschirmdiagonale oder sprechen
            Sie direkt mit uns über Ihr Projekt.
          </p>
          <div className="contact-links-v6">
            <a className="contact-action-v5" href="/produkte">
              <span>Modelle entdecken</span>
              <span>↗</span>
            </a>
            <a className="contact-action-v5" href="#contact">
              <span>Projekt besprechen</span>
              <span>↗</span>
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
