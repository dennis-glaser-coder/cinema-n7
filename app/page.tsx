"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  ["01", "Space", "Architecture, viewing distance and room conditions."],
  ["02", "Design", "Image, sound, light and materials conceived as one."],
  ["03", "Engineering", "Direct View LED, acoustics, control and infrastructure."],
  ["04", "Installation", "Integrated precisely into the architecture."],
  ["05", "Calibration", "Image and sound tuned for the finished room."],
];

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
        .fromTo(".hero-kicker", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, "-=.45")
        .fromTo(".hero-title .line", { opacity: 0, yPercent: 110 }, { opacity: 1, yPercent: 0, duration: 1.15, stagger: 0.1 }, "-=.55")
        .fromTo(".hero-meta, .hero-index", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.08 }, "-=.5");

      gsap.to(".hero-media-inner", {
        scale: 1.09,
        yPercent: 5,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 },
      });

      gsap.to(".hero-copy", {
        yPercent: -16,
        opacity: 0.12,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "35% top", end: "bottom top", scrub: 1 },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 48 }, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 82%", once: true },
        });
      });

      gsap.fromTo(".statement-lines span", { opacity: 0.15 }, {
        opacity: 1,
        stagger: 0.16,
        ease: "none",
        scrollTrigger: { trigger: ".statement", start: "top 45%", end: "bottom 55%", scrub: 1 },
      });

      gsap.to(".seven", {
        yPercent: -12,
        rotate: -2,
        ease: "none",
        scrollTrigger: { trigger: ".n7-story", start: "top bottom", end: "bottom top", scrub: 1.4 },
      });
    }, root);

    const onMove = (event: MouseEvent) => {
      if (!cursor.current) return;
      gsap.to(cursor.current, { x: event.clientX, y: event.clientY, duration: 0.22, ease: "power3.out" });
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
              <video className="hero-video" autoPlay muted loop playsInline preload="metadata" onError={() => setVideoReady(false)}>
                <source src="/media/hero.mp4" type="video/mp4" />
              </video>
            )}
            <div className="hero-ambient" />
            <div className="hero-architecture">
              <div className="hero-ceiling" />
              <div className="hero-wall hero-wall-left" />
              <div className="hero-wall hero-wall-right" />
              <div className="hero-screen-shell">
                <div className="hero-screen-image">
                  <div className="hero-screen-flare" />
                  <div className="hero-screen-scan" />
                </div>
              </div>
              <div className="hero-floor" />
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
          <a className="brand" href="#top" aria-label="Cinema N°7 Home">CINEMA N°7</a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#experience">Experience</a>
            <a href="#technology">Technology</a>
            <a href="#commission">Commission</a>
          </nav>
          <a className="nav-inquire" href="#commission">Private consultation</a>
        </header>

        <div className="hero-copy">
          <p className="hero-kicker">PRIVATE THEATRES</p>
          <h1 className="hero-title" aria-label="Cinema, without projection.">
            <span className="line-wrap"><span className="line">Cinema,</span></span>
            <span className="line-wrap"><span className="line">without projection.</span></span>
          </h1>
          <div className="hero-meta">
            <p>Direct View LED. Immersive sound.<br />Architectural integration.</p>
            <a className="text-link" href="#experience">Enter N°7 <span>↘</span></a>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>THE SEVENTH ART</span>
          <span>SCROLL TO ENTER</span>
        </div>
      </section>

      <section id="experience" className="manifesto section-lightless">
        <div className="section-rule" />
        <p className="eyebrow reveal">THE EXPERIENCE</p>
        <h2 className="display reveal">Not a screen.<br />A private cinema.</h2>
        <div className="manifesto-foot reveal">
          <span>01</span>
          <p>CINEMA N°7 creates private theatres where image, sound, light and architecture are conceived as one experience.</p>
        </div>
      </section>

      <section id="technology" className="statement">
        <div className="statement-backdrop" aria-hidden="true">
          <div className="screen-frame"><div className="screen-light" /></div>
        </div>
        <div className="statement-content">
          <p className="eyebrow">DIRECT VIEW LED</p>
          <div className="statement-lines">
            <span>NO PROJECTOR.</span>
            <span>NO SHADOWS.</span>
            <span>NO COMPROMISE.</span>
          </div>
          <div className="technology-foot reveal">
            <span>1.2 / 1.9</span>
            <p>Fine-pitch LED selected around room scale, architecture and viewing distance — not around a catalogue size.</p>
          </div>
        </div>
      </section>

      <section className="room-scene" aria-label="The room">
        <div className="room-frame">
          <div className="room-screen" />
          <div className="room-floor" />
          <div className="room-seat room-seat-a" />
          <div className="room-seat room-seat-b" />
        </div>
        <div className="room-copy reveal">
          <p className="eyebrow">THE ROOM</p>
          <h2 className="display">One room.<br />One system.</h2>
          <div className="room-disciplines">
            <span>IMAGE</span><span>SOUND</span><span>ACOUSTICS</span><span>LIGHT</span><span>CONTROL</span>
          </div>
        </div>
      </section>

      <section className="n7-story section-lightless">
        <p className="eyebrow reveal">THE NAME</p>
        <div className="seven" aria-hidden="true">7</div>
        <div className="n7-copy reveal">
          <span className="n7-mark">N°7</span>
          <h2 className="display">The seventh art.</h2>
          <p>Cinema is traditionally known as the seventh art. N°7 carries that idea into a new kind of private architectural experience.</p>
        </div>
      </section>

      <section id="commission" className="commission">
        <div className="section-rule" />
        <div className="commission-head">
          <p className="eyebrow reveal">THE COMMISSION</p>
          <h2 className="display reveal">Every N°7<br />is commissioned.</h2>
        </div>
        <div className="steps">
          {steps.map(([number, title, description]) => (
            <article className="step" key={number}>
              <span className="step-number">{number}</span>
              <strong>{title}</strong>
              <p>{description}</p>
              <span className="step-arrow">↗</span>
            </article>
          ))}
        </div>
        <div className="commission-close reveal">
          <p>A private consultation begins with the room — not with a product.</p>
          <a className="cta" href="mailto:hello@example.com">
            <span>Begin your commission</span><span>↗</span>
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">CINEMA N°7</div>
        <div>PRIVATE THEATRES</div>
        <div>GERMANY / EUROPE</div>
        <div>© 2026</div>
      </footer>
    </main>
  );
}
