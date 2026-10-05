import { notFound } from "next/navigation";
import {
  cabinet,
  cinemaModels,
  formatEuro,
  formatMeters,
} from "../../../lib/cinema-products";

export function generateStaticParams() {
  return cinemaModels.map((model) => ({ id: model.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const model = cinemaModels.find((item) => item.id === id);

  if (!model) {
    notFound();
  }

  return (
    <main className="product-detail-page">
      <header className="models-nav product-detail-nav">
        <a href="/" className="brand-v5">
          CINEMA N°7
        </a>
        <a href="/produkte" className="models-back">
          Modelle
        </a>
      </header>

      <section className="product-detail-hero">
        <div className="product-detail-copy">
          <p className="overline-v5">CINEMA N°7 · {model.diagonalInches}&quot;</p>
          <h1>{model.diagonalInches}&quot;</h1>
          <p className="product-detail-size">
            {formatMeters(model.widthM)} × {formatMeters(model.heightM)} m
          </p>

          <div className="product-detail-price">
            <strong>{formatEuro(model.panelCostEur)}</strong>
            <span>zzgl. MwSt.</span>
          </div>

          <a href="/#contact" className="product-detail-cta">
            Private Beratung
          </a>
        </div>

        <div className="product-detail-visual" aria-hidden="true">
          <div className="product-detail-screen">
            <div className="product-detail-screen-image" />
            <div
              className="product-detail-grid"
              style={{
                gridTemplateColumns: `repeat(${model.cabinetsWide}, 1fr)`,
                gridTemplateRows: `repeat(${model.cabinetsHigh}, 1fr)`,
              }}
            >
              {Array.from({ length: model.cabinets }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail-specs">
        <div className="product-detail-section-head">
          <p className="overline-v5">DATEN</p>
          <h2>Das Format.</h2>
        </div>

        <div className="product-detail-spec-grid">
          <article>
            <span>Bildfläche</span>
            <strong>
              {formatMeters(model.widthM)} × {formatMeters(model.heightM)} m
            </strong>
          </article>
          <article>
            <span>Diagonale</span>
            <strong>{model.diagonalInches}&quot;</strong>
          </article>
          <article>
            <span>Auflösung</span>
            <strong>
              {model.resolutionX} × {model.resolutionY}
            </strong>
          </article>
          <article>
            <span>Pixel Pitch</span>
            <strong>{cabinet.pixelPitchMm.toLocaleString("de-DE")} mm</strong>
          </article>
          <article>
            <span>Modulraster</span>
            <strong>
              {model.cabinetsWide} × {model.cabinetsHigh}
            </strong>
          </article>
          <article>
            <span>Module</span>
            <strong>{model.cabinets}</strong>
          </article>
        </div>
      </section>

      <section className="product-detail-scope">
        <div>
          <p className="overline-v5">SYSTEM</p>
          <h2>Als vollständiges Bildsystem.</h2>
        </div>

        <div className="product-detail-scope-list">
          <article>
            <strong>LED-Bildfläche</strong>
            <p>Konfiguriert für die gewählte Größe und das definierte Modulraster.</p>
          </article>
          <article>
            <strong>Integration</strong>
            <p>Mechanik, Processing, Signal und Strom als abgestimmtes System.</p>
          </article>
          <article>
            <strong>Installation</strong>
            <p>Aufbau und Inbetriebnahme vor Ort.</p>
          </article>
          <article>
            <strong>Kalibrierung</strong>
            <p>Präzise Abstimmung des fertigen Bildes.</p>
          </article>
        </div>
      </section>

      <section className="product-detail-contact">
        <p className="overline-v5">PRIVATE BERATUNG</p>
        <h2>{model.diagonalInches}&quot; für Ihr Heimkino.</h2>
        <a href="/#contact" className="product-detail-cta">
          Projekt besprechen
        </a>
      </section>
    </main>
  );
}
