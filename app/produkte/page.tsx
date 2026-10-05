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

  const sceneScale = 84;
  const wallWidthPercent = (selected.widthM / MAX_WALL_WIDTH_M) * sceneScale;
  const personHeightPercentOfMaxWallWidth = (PERSON_HEIGHT_M / MAX_WALL_WIDTH_M) * sceneScale;

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
          Wählen Sie die Bildgröße für Ihren Raum. Die exakten Maße der
          16:9-Bildfläche werden direkt angezeigt.
        </p>
      </section>

      <section className="model-configurator-v2">
        <div className="model-preview-scale" aria-label="Größenvergleich">
          <div className="scale-stage" style={wallStyle}>
            <div className="scale-room-backdrop" />
            <div className="scale-room-wall" />
            <div className="scale-room-slat scale-room-slat-left" />
            <div className="scale-room-slat scale-room-slat-right" />
            <div className="scale-room-floor" />
            <div className="scale-room-foreground" />
            <div className="scale-baseline" />

            <div className="scale-composition">
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

            <div className="selected-price-v2">
              <strong>{formatEuro(selected.panelCostEur)}</strong>
              <p>zzgl. MwSt.</p>
            </div>

            <div className="selected-note-v2">
              <span>Technische Konfiguration</span>
              <p>
                {selected.cabinetsWide} × {selected.cabinetsHigh} Module
              </p>
            </div>

            <a className="product-detail-link-v2" href={`/produkte/${selected.id}`}>
              Produkt ansehen
            </a>
          </div>
        </div>
      </section>

      <section className="models-next-v2 models-next-v2-clean">
        <div>
          <p className="overline-v5">PRIVATE BERATUNG</p>
          <h2>Ihr LED-Heimkino.</h2>
        </div>
        <a href="/anfrage" className="models-next-link-v2">
          Projekt anfragen
        </a>
      </section>
    </main>
  );
}
