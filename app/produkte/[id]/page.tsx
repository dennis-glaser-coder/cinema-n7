import SiteHeader from "../../../components/site-header";
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

  const title = `${model.diagonalInches} Zoll LED-Heimkino – schlüsselfertig`;
  const description = `${model.diagonalInches} Zoll LED-Heimkino mit ${formatMeters(
    model.widthM
  )} × ${formatMeters(model.heightM)} m Bildfläche, 1,25 mm Pixel Pitch und schlüsselfertiger Montage inklusive Anfahrt und Kalibrierung.`;

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
      <SiteHeader />

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
            <span className="turnkey-price-eyebrow-v13">SCHLÜSSELFERTIGER KOMPLETTPREIS</span>
            <strong>{formatEuro(model.netPriceEur)}</strong>
            <span className="turnkey-price-vat-v13">netto zzgl. 19 % MwSt.</span>
            <span className="turnkey-price-net-v13">Endpreis inkl. MwSt.: {formatEuro(model.grossPriceEur)}</span>
          </div>
          <p className="turnkey-detail-summary-v13">
            LED-Wand, Steuerung, Unterkonstruktion, Anfahrt,
            Montage, Inbetriebnahme und Kalibrierung –
            alles im ausgewiesenen Komplettpreis enthalten.
          </p>

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
          <h2>Schlüsselfertig. Alles im Preis.</h2>
        </div>

        <div className="product-detail-scope-list">
          <article>
            <strong>LED-Bildfläche</strong>
            <p>Die komplette P1.25-Bildwand mit den benötigten Modulen für Ihre gewählte Größe.</p>
          </article>
          <article>
            <strong>Integration</strong>
            <p>Passender NovaStar-Controller, Unterkonstruktion und Verbindung der Systemkomponenten.</p>
          </article>
          <article>
            <strong>Installation</strong>
            <p>Fachgerechter Aufbau, Ausrichtung, Anschluss und Inbetriebnahme am vereinbarten Montageort.</p>
          </article>
          <article>
            <strong>Kalibrierung</strong>
            <p>Bildabstimmung, Funktionstest und Übergabe des betriebsbereiten Systems.</p>
          </article>
          <article>
            <strong>Anfahrt &amp; Übernachtung</strong>
            <p>Anfahrt und erforderliche Übernachtungen unseres Montageteams sind enthalten.</p>
          </article>
        </div>
        <p className="turnkey-terms-v13 turnkey-detail-terms-v13">
          Der Preis gilt bei geeigneter Montagefläche und vorhandener
          Strom- und Signalzuführung, einschließlich Anfahrt bis 300 km
          und 3 Stunden je Richtung. Besondere Bau- oder Elektroarbeiten
          und weiter entfernte Montageorte stimmen wir vorab mit Ihnen ab.
        </p>
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
