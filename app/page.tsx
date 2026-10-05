"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-kicker",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.15 }
      );
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 1.35, ease: "power3.out", delay: 0.35 }
      );
      gsap.fromTo(
        ".hero-meta",
        { opacity: 0 },
        { opacity: 1, duration: 1.2, delay: 0.9 }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={root}>
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <div className="hero-glow hero-glow-a" />
          <div className="hero-glow hero-glow-b" />
          <div className="hero-grid" />
          <div className="hero-vignette" />
        </div>

        <header className="nav">
          <a className="brand" href="#top" aria-label="Cinema N°7 Home">
            CINEMA N°7
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#experience">Experience</a>
            <a href="#technology">Technology</a>
            <a href="#commission">Commission</a>
          </nav>
        </header>

        <div id="top" className="hero-copy">
          <p className="hero-kicker">PRIVATE THEATRES</p>
          <h1 className="hero-title">
            Cinema,
            <br />
            without projection.
          </h1>
          <div className="hero-meta">
            <p>Direct View LED. Immersive sound. Architectural integration.</p>
            <a className="enter-link" href="#experience">
              Enter N°7 <span>↘</span>
            </a>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>THE SEVENTH ART</span>
          <span>01 — 07</span>
        </div>
      </section>

      <section id="experience" className="manifesto section-dark">
        <p className="eyebrow">THE EXPERIENCE</p>
        <h2>Not a screen.<br />A private cinema.</h2>
        <p className="body-copy">
          CINEMA N°7 creates private theatres where image, sound, light and
          architecture are conceived as one experience.
        </p>
      </section>

      <section id="technology" className="statement section-black">
        <p className="eyebrow">DIRECT VIEW</p>
        <div className="statement-lines">
          <span>NO PROJECTOR.</span>
          <span>NO SHADOWS.</span>
          <span>NO COMPROMISE.</span>
        </div>
      </section>

      <section className="n7-story section-dark">
        <p className="eyebrow">N°7</p>
        <div className="seven">7</div>
        <div className="n7-copy">
          <h2>The seventh art.</h2>
          <p>
            Cinema is traditionally known as the seventh art. N°7 turns that
            idea into a private architectural experience.
          </p>
        </div>
      </section>

      <section id="commission" className="commission section-black">
        <p className="eyebrow">THE COMMISSION</p>
        <h2>Every N°7 is commissioned.</h2>
        <div className="steps">
          {["Space", "Design", "Engineering", "Installation", "Calibration"].map(
            (step, index) => (
              <div className="step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            )
          )}
        </div>
        <a className="commission-link" href="mailto:hello@example.com">
          Begin your commission ↗
        </a>
      </section>

      <footer className="footer">
        <div>CINEMA N°7</div>
        <div>PRIVATE THEATRES</div>
        <div>© 2026</div>
      </footer>
    </main>
  );
}
