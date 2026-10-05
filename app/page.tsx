"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  ["01", "Raum", "Architektur, Geometrie und Betrachtungsabstand."],
  ["02", "Entwurf", "Bild, Akustik, Licht und Materialien."],
  ["03", "Engineering", "LED-System, Audiotechnik, Steuerung und Infrastruktur."],
  ["04", "Integration", "Präzise Installation und architektonische Einbindung."],
  ["05", "Kalibrierung", "Bild und Klang werden im fertigen Raum abgestimmt."],
];

const disciplines = ["BILD", "KLANG", "AKUSTIK", "LICHT", "STEUERUNG"];

export default function Home() {
  const root = useRef<HTMLElement | null>(null);
  const cursor = useRef<HTMLDivElement | null>(null);
  const [videoReady, setVideoReady] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

      intro
        .fromTo(".nav", { opacity: 0 }, { opacity: 1, duration: 0.9 })
        .fromTo(
          ".hero-kicker",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.75 },
          "-=.45"
        )
        .fromTo(
          ".hero-title .line",
          { opacity: 0, yPercent: 115 },
          { opacity: 1, yPercent: 0, duration: 1.2, stagger: 0.11 },
          "-=.5"
        )
        .fromTo(
          ".hero-meta, .hero-index",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.1 },
          "-=.5"
        )
        .fromTo(
          ".hero-screen-shell",
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 1.55, ease: "power2.out" },
          "-=1.25"
        );

      gsap.to(".hero-media-inner", {
        scale: 1.08,
        yPercent: 4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to(".hero-copy", {
        yPercent: -14,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "38% top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".hero-screen-shell", {
        scale: 1.18,
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "35% top",
          end: "bottom top",
          scrub: 1.1,
        },
      });

      gsap.to(".hero-architecture-lines", {
        opacity: 0,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "45% top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          }
        );
      });

      gsap.fromTo(
        ".statement-lines span",
        { opacity: 0.12, x: -22 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".statement",
            start: "top 48%",
            end: "bottom 58%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".pixel-cell",
        { opacity: 0.06 },
        {
          opacity: 0.48,
          stagger: { amount: 1.4, from: "random" },
          ease: "none",
          scrollTrigger: {
            trigger: ".statement",
            start: "top 70%",
            end: "bottom 45%",
            scrub: 1,
          },
        }
      );

      gsap.to(".room-frame", {
        scale: 1.055,
        ease: "none",
        scrollTrigger: {
          trigger: ".room-scene",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.3,
        },
      });

      gsap.fromTo(
        ".room-disciplines span",
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.65,
          scrollTrigger: {
            trigger: ".room-disciplines",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.to(".seven-outline", {
        yPercent: -10,
        rotate: -2.2,
        ease: "none",
        scrollTrigger: {
          trigger: ".n7-story",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.to(".n7-orbit", {
        rotate: 26,
        ease: "none",
        scrollTrigger: {
          trigger: ".n7-story",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      gsap.fromTo(
        ".step",
        { opacity: 0.35, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".steps",
            start: "top 78%",
            once: true,
          },
        }
      );
    }, root);

    const onMove = (event: MouseEvent) => {
      if (!cursor.current) return;
      gsap.to(cursor.current, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <main ref={root}>
      <div ref={cursor} className="cursor" aria-hidden="true" />

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-media-inner">
            {videoReady && (
              <video
                className="hero-video"
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

            <div className="hero-ambient" />

            <div className="hero-architecture">
              <svg
                className="hero-architecture-lines"
                viewBox="0 0 1600 1000"
                preserveAspectRatio="none"
              >
                <path d="M0 820 L800 345 L1600 820" />
                <path d="M0 930 L800 345 L1600 930" />
                <path d="M245 0 L800 345 L1355 0" />
                <path d="M385 0 L800 345 L1215 0" />
                <line x1="800" y1="0" x2="800" y2="1000" />
                <line x1="0" y1="710" x2="1600" y2="710" />
              </svg>

              <div className="hero-ceiling">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-wall hero-wall-left" />
              <div className="hero-wall hero-wall-right" />

              <div className="hero-screen-shell">
                <div className="hero-screen-image">
                  <div className="screen-scene">
                    <div className="screen-horizon" />
                    <div className="screen-orb" />
                    <div className="screen-beam screen-beam-a" />
                    <div className="screen-beam screen-beam-b" />
                    <div className="screen-reflection" />
                  </div>
                  <div className="hero-screen-scan" />
                  <div className="screen-corner screen-corner-a" />
                  <div className="screen-corner screen-corner-b" />
                </div>
              </div>

              <div className="hero-floor">
                <i />
                <i />
                <i />
                <i />
              </div>

              <div className="hero-seat-row">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className="hero-grain" />
          <div className="hero-vignette" />
        </div>

        <header className="nav">
          <a className="brand" href="#top" aria-label="Cinema N°7 Startseite">
            CINEMA N°7
          </a>
          <nav className="nav-links" aria-label="Hauptnavigation">
            <a href="#experience">Raum</a>
            <a href="#technology">Technologie</a>
            <a href="#commission">Projekt</a>
          </nav>
          <a className="nav-inquire" href="#commission">
            Private Beratung
          </a>
        </header>

        <div className="hero-copy">
          <p className="hero-kicker">PRIVATE THEATRES</p>
          <h1 className="hero-title" aria-label="Kino. Ohne Projektion.">
            <span className="line-wrap">
              <span className="line">Kino.</span>
            </span>
            <span className="line-wrap">
              <span className="line">Ohne Projektion.</span>
            </span>
          </h1>

          <div className="hero-meta">
            <p>
              Direct View LED. Raumakustik. Licht. Steuerung.
              <br />
              Als Teil der Architektur geplant.
            </p>

            <a className="hero-enter" href="#experience">
              <span className="hero-enter-index">N°7</span>
              <span className="hero-enter-label">N°7 entdecken</span>
              <span className="hero-enter-arrow">↘</span>
            </a>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>DIE SIEBTE KUNST</span>
          <span>01 / 07</span>
          <span>WEITER</span>
        </div>
      </section>

      <section id="experience" className="manifesto section-lightless">
        <div className="section-rule" />

        <div className="architectural-grid" aria-hidden="true">
          <span className="axis axis-v axis-v-a" />
          <span className="axis axis-v axis-v-b" />
          <span className="axis axis-h axis-h-a" />
          <span className="axis axis-h axis-h-b" />
          <span className="grid-index grid-index-a">01</span>
          <span className="grid-index grid-index-b">RAUM</span>
        </div>

        <p className="eyebrow reveal">DER RAUM</p>

        <h2 className="display manifesto-title reveal">
          Alles beginnt
          <br />
          <em>mit dem Raum.</em>
        </h2>

        <div className="manifesto-graphic reveal" aria-hidden="true">
          <div className="manifesto-aperture">
            <span className="aperture-line aperture-line-a" />
            <span className="aperture-line aperture-line-b" />
            <span className="aperture-line aperture-line-c" />
            <div className="aperture-core" />
          </div>
          <div className="manifesto-coordinates">
            <span>BILD / KLANG / LICHT</span>
            <span>ARCHITEKTUR / 001</span>
          </div>
        </div>

        <div className="manifesto-foot reveal">
          <span>01</span>
          <p>
            CINEMA N°7 creates private theatres where image, sound, light and
            architecture are conceived as one experience.
          </p>
        </div>
      </section>

      <section id="technology" className="statement">
        <div className="statement-backdrop" aria-hidden="true">
          <div className="screen-frame">
            <div className="screen-light" />
            <div className="pixel-field">
              {Array.from({ length: 72 }).map((_, index) => (
                <span className="pixel-cell" key={index} />
              ))}
            </div>
            <div className="screen-measure screen-measure-top">
              <span>DIRECT VIEW / 16:9</span>
              <span>RAUMBEZOGENE DIMENSIONIERUNG</span>
            </div>
            <div className="screen-measure screen-measure-bottom">
              <span>FINE PITCH</span>
              <span>P1.2 — P1.9</span>
            </div>
          </div>
        </div>

        <div className="statement-content">
          <p className="eyebrow">DIRECT VIEW LED</p>

          <div className="statement-lines">
            <span>KEIN PROJEKTOR.</span>
            <span>DIREKTES LICHT.</span>
            <span>PRÄZISE KALIBRIERT.</span>
          </div>

          <div className="technology-foot reveal">
            <span>1.2 / 1.9</span>
            <p>
              Fine-pitch LED selected around room scale, architecture and
              viewing distance — not around a catalogue size.
            </p>
          </div>
        </div>
      </section>

      <section className="room-scene" aria-label="Das System">
        <div className="room-frame" aria-hidden="true">
          <div className="room-ceiling">
            <span />
            <span />
            <span />
          </div>
          <div className="room-side-light room-side-light-left" />
          <div className="room-side-light room-side-light-right" />
          <div className="room-screen">
            <div className="room-screen-art">
              <span className="room-orb" />
              <span className="room-art-line room-art-line-a" />
              <span className="room-art-line room-art-line-b" />
            </div>
          </div>
          <div className="room-floor">
            <span />
            <span />
            <span />
          </div>
          <div className="room-seating">
            <div className="room-seat room-seat-a" />
            <div className="room-seat room-seat-b" />
            <div className="room-seat room-seat-c" />
          </div>
          <div className="room-perspective">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="room-copy reveal">
          <div className="room-copy-top">
            <p className="eyebrow">DAS SYSTEM</p>
            <span className="room-index">03 / 07</span>
          </div>

          <h2 className="display">
            Ein Raum.
            <br />
            Ein System.
          </h2>

          <div className="room-disciplines">
            {disciplines.map((discipline, index) => (
              <span key={discipline}>
                <i>{String(index + 1).padStart(2, "0")}</i>
                {discipline}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="n7-story section-lightless">
        <div className="n7-graphic" aria-hidden="true">
          <div className="seven-outline">7</div>
          <div className="n7-orbit">
            <span className="n7-orbit-label n7-orbit-label-a">DIE SIEBTE KUNST</span>
            <span className="n7-orbit-label n7-orbit-label-b">CINEMA N°7</span>
          </div>
          <div className="n7-crosshair">
            <span />
            <span />
          </div>
          <div className="n7-monogram">N°7</div>
        </div>

        <p className="eyebrow reveal">DER NAME</p>

        <div className="n7-copy reveal">
          <span className="n7-mark">N°7 / 04</span>
          <h2 className="display">
            The
            <br />
            seventh art.
          </h2>
          <p>
            Cinema is traditionally known as the seventh art. N°7 carries that
            idea into a new kind of private architectural experience.
          </p>
        </div>
      </section>

      <section id="commission" className="commission">
        <div className="section-rule" />

        <div className="commission-rail" aria-hidden="true">
          <span className="commission-rail-label">PROJEKT / 05</span>
          <div className="commission-rail-line" />
          <span className="commission-rail-number">N°7</span>
        </div>

        <div className="commission-head">
          <p className="eyebrow reveal">DAS PROJEKT</p>
          <h2 className="display reveal">
            Every N°7
            <br />
            is commissioned.
          </h2>
        </div>

        <div className="steps">
          {steps.map(([number, title, description], index) => (
            <article className="step" key={number}>
              <span className="step-number">{number}</span>
              <strong>{title}</strong>
              <p>{description}</p>
              <div className="step-progress" aria-hidden="true">
                <span style={{ width: `${(index + 1) * 20}%` }} />
              </div>
              <span className="step-arrow">↗</span>
            </article>
          ))}
        </div>

        <div className="commission-close reveal">
          <div className="commission-close-copy">
            <span className="commission-close-index">PRIVAT / INDIVIDUELL / N°7</span>
            <p>
              Erzählen Sie uns von dem Raum. Alles Weitere beginnt dort.
            </p>
          </div>

          <a className="cta" href="mailto:hello@example.com">
            <span>Projekt besprechen</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">CINEMA N°7</div>
        <div>PRIVATE THEATRES</div>
        <div>DEUTSCHLAND / EUROPA</div>
        <div className="footer-end">
          <span>DIE SIEBTE KUNST</span>
          <span>© 2026</span>
        </div>
      </footer>
    </main>
  );
}
