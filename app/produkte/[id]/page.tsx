import type { Metadata } from "next";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const model = cinemaModels.find((item) => item.id === id);

  if (!model) {
    return {};
  }

  const title = `${model.diagonalInches} Zoll LED-Heimkino`;
  const description = `${model.diagonalInches} Zoll LED-Heimkino mit ${formatMeters(
    model.widthM
  )} × ${formatMeters(model.heightM)} m Bildfläche und 1,25 mm Pixel Pitch.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/produkte/${model.id}`,
    },
    openGraph: {
      title,
      description,
      url: `/produkte/${model.id}`,
    },
  };
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
          <div className="product-detail-pitch-v12">
            <span>PIXEL PITCH</span>
            <strong>{cabinet.pixelPitchMm.toLocaleString("de-DE")} mm</strong>
          </div>

          <div className="product-detail-price">
            <strong>{formatEuro(model.panelCostEur)}</strong>
            <span>zzgl. MwSt.</span>
          </div>

          <a href="/anfrage" className="product-detail-cta">
            Projekt anfragen
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
            <span>Pixel Pitch</span>
            <strong>{cabinet.pixelPitchMm.toLocaleString("de-DE")} mm</strong>
          </article>
          <article>
            <span>Bildformat</span>
            <strong>16:9</strong>
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
          <h2>Als vollständiges LED-System.</h2>
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

      <section className="product-detail-related" aria-labelledby="related-models-title">
        <div className="product-detail-related-head">
          <p className="overline-v5">WEITER</p>
          <h2 id="related-models-title">Weitere Größen.</h2>
        </div>

        <div className="product-detail-related-grid">
          {cinemaModels.map((item) => (
            <a
              key={item.id}
              href={`/produkte/${item.id}`}
              className={item.id === model.id ? "is-current" : ""}
              aria-current={item.id === model.id ? "page" : undefined}
            >
              <strong>{item.diagonalInches}&quot;</strong>
              <span>
                {formatMeters(item.widthM)} × {formatMeters(item.heightM)} m
              </span>
            </a>
          ))}
        </div>

        <div className="product-detail-related-links">
          <a href="/produkte">Alle Modelle</a>
          <a href="/led-heimkino">Warum LED?</a>
          <a href="/led-oder-beamer">LED oder Beamer?</a>
          <a href="/anfrage">Projekt anfragen</a>
        </div>
      </section>

      <section className="product-detail-contact">
        <p className="overline-v5">PRIVATE BERATUNG</p>
        <h2>{model.diagonalInches}&quot; für Ihr Heimkino.</h2>
        <a href="/anfrage" className="product-detail-cta">
          Projekt anfragen
        </a>
      </section>
    </main>
  );
}
