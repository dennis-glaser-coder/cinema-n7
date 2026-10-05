"use client";

import { CSSProperties, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { cinemaModels, formatEuro, formatMeters } from "../../lib/cinema-products";

const PERSON_HEIGHT_M = 1.75;
const MAX_WALL_WIDTH_M = cinemaModels[cinemaModels.length - 1].widthM;

export default function ProductsPage() {
  const defaultModel = cinemaModels[2];
  const [selectedId, setSelectedId] = useState(defaultModel.id);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const selected = useMemo(
    () => cinemaModels.find((model) => model.id === selectedId) ?? cinemaModels[0],
    [selectedId]
  );

  const wallWidthPercent = (selected.widthM / MAX_WALL_WIDTH_M) * 76;
  const personHeightPercentOfMaxWallWidth = (PERSON_HEIGHT_M / MAX_WALL_WIDTH_M) * 76;

  useEffect(() => {
    if (!detailRef.current) return;

    gsap.fromTo(
      detailRef.current,
      { opacity: 0.4, y: 10 },
      { opacity: 1, y: 0, duration: 0.42, ease: "power2.out" }
    );
  }, [selectedId]);

  const wallStyle = {
    "--wall-width": `${wallWidthPercent}cqw`,
    "--person-height": `${personHeightPercentOfMaxWallWidth}cqw`,
    "--cab-count": selected.cabinetsWide,
  } as CSSProperties;

  return (
    <main className="models-page models-page-v2">
      <header className="models-nav">
        <a href="/" className="brand-v5">
          CINEMA N°7
        </a>
        <a href="/" className="models-back">
          Zurück
        </a>
      </header>

      <section className="models-intro-v2">
        <div>
          <p className="overline-v5">MODELLE</p>
          <h1>Ihre Bildgröße.</h1>
        </div>
        <p>
          Wählen Sie die Bildschirmdiagonale in Zoll. Die exakten Maße der
          16:9-Bildfläche werden direkt angezeigt.
        </p>
      </section>

      <section className="model-configurator-v2">
        <div className="model-preview-scale" aria-label="Größenvergleich">
          <div className="scale-stage" style={wallStyle}>
            <div className="scale-baseline" />

            <div className="scale-person-wrap">
              <div className="scale-person-image" />
              <span className="scale-person-label">1,75 m</span>
            </div>

            <div className="scale-wall">
              <div className="scale-wall-image" />
              <div
                className="scale-wall-grid"
                style={{
                  gridTemplateColumns: `repeat(${selected.cabinetsWide}, 1fr)`,
                  gridTemplateRows: `repeat(${selected.cabinetsHigh}, 1fr)`,
                }}
              >
                {Array.from({ length: selected.cabinets }).map((_, index) => (
                  <span key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className="scale-caption">
            <span>{selected.diagonalInches}&quot;</span>
            <span>
              {selected.cabinetsWide} × {selected.cabinetsHigh} Cabinets
            </span>
            <span>
              {formatMeters(selected.widthM)} × {formatMeters(selected.heightM)} m
            </span>
          </div>
        </div>

        <div className="model-controls-v2">
          <div className="model-picker-v2" role="group" aria-label="Bildschirmdiagonale wählen">
            {cinemaModels.map((model) => (
              <button
                key={model.id}
                type="button"
                className={model.id === selectedId ? "is-active" : ""}
                onClick={() => setSelectedId(model.id)}
              >
                <span>{model.diagonalInches}</span>
                <small>Zoll</small>
              </button>
            ))}
          </div>

          <div className="selected-model-v2" ref={detailRef}>
            <div className="selected-model-heading-v2">
              <p className="overline-v5">GEWÄHLTE BILDGRÖSSE</p>
              <h2>{selected.diagonalInches}&quot;</h2>
            </div>

            <div className="selected-dimensions-v2">
              <div>
                <span>Breite</span>
                <strong>{formatMeters(selected.widthM)} m</strong>
              </div>
              <div>
                <span>Höhe</span>
                <strong>{formatMeters(selected.heightM)} m</strong>
              </div>
            </div>

            <div className="selected-note-v2">
              <span>16:9 LED-Bildfläche</span>
              <p>
                {selected.cabinetsWide} × {selected.cabinetsHigh} Cabinets ·
                Referenzperson 1,75 m
              </p>
            </div>

            <div className="selected-price-v2">
              <span>Vorläufige Panelkosten</span>
              <strong>{formatEuro(selected.panelCostEur)}</strong>
              <p>Berechnet mit 650 € pro Panel. Noch kein finaler Verkaufspreis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="models-next-v2">
        <div>
          <p className="overline-v5">NÄCHSTER SCHRITT</p>
          <h2>Produktdetails und Preis.</h2>
        </div>
        <p>
          Im nächsten Schritt bekommt jede Größe eine eigene Produktseite mit
          Systemumfang, technischen Details und Preis.
        </p>
      </section>
    </main>
  );
}
