"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cinemaModels, formatMeters } from "../../lib/cinema-products";

export default function ProductsPage() {
  const [selectedId, setSelectedId] = useState(cinemaModels[2].id);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const selected = cinemaModels.find((model) => model.id === selectedId) ?? cinemaModels[0];

  useEffect(() => {
    if (!detailRef.current) return;

    gsap.fromTo(
      detailRef.current,
      { opacity: 0.35, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
    );
  }, [selectedId]);

  return (
    <main className="models-page">
      <header className="models-nav">
        <a href="/" className="brand-v5">CINEMA N°7</a>
        <a href="/" className="models-back">← Zurück</a>
      </header>

      <section className="models-hero">
        <div className="models-hero-copy">
          <p className="overline-v5">MODELLE</p>
          <h1>Ihre Bildgröße.</h1>
          <p>
            Wählen Sie die gewünschte Bildschirmdiagonale. Die exakten
            Außenmaße der 16:9-Bildfläche werden direkt angezeigt.
          </p>
        </div>

        <div className="models-stage" aria-hidden="true">
          <div className="models-screen">
            <div className="models-screen-art" />
          </div>
        </div>
      </section>

      <section className="model-selector">
        <div className="inch-options" role="group" aria-label="Bildschirmdiagonale wählen">
          {cinemaModels.map((model) => (
            <button
              key={model.id}
              type="button"
              className={model.id === selectedId ? "is-active" : ""}
              onClick={() => setSelectedId(model.id)}
            >
              <strong>{model.diagonalInches}</strong>
              <span>Zoll</span>
            </button>
          ))}
        </div>

        <div className="selected-model" ref={detailRef}>
          <div className="selected-model-main">
            <p className="overline-v5">GEWÄHLTE BILDGRÖSSE</p>
            <h2>{selected.diagonalInches}&quot;</h2>
          </div>

          <div className="selected-dimensions">
            <div>
              <span>Breite</span>
              <strong>{formatMeters(selected.widthM)} m</strong>
            </div>
            <div>
              <span>Höhe</span>
              <strong>{formatMeters(selected.heightM)} m</strong>
            </div>
          </div>

          <div className="selected-actions">
            <p>16:9 LED-Bildfläche</p>
            <button type="button" disabled>
              Produktdetails folgen
            </button>
          </div>
        </div>
      </section>

      <section className="models-note">
        <p>
          Preise und konkrete Produktseiten werden hier ergänzt, sobald die
          finale Systemkalkulation feststeht.
        </p>
      </section>
    </main>
  );
}
