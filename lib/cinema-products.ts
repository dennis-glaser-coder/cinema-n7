export const cabinet = {
  widthMm: 600,
  heightMm: 337.5,
  pixelPitchMm: 1.25,
  pixelsX: 480,
  pixelsY: 270,
} as const;

export const PANEL_PRICE_EUR = 650;

const cabinetCounts = [4, 5, 6, 7, 8, 9, 10];

export const cinemaModels = cabinetCounts.map((count) => {
  const widthM = (cabinet.widthMm * count) / 1000;
  const heightM = (cabinet.heightMm * count) / 1000;
  const diagonalInches = Math.round(
    Math.hypot(widthM, heightM) / 0.0254
  );

  return {
    id: `n7-${diagonalInches}`,
    diagonalInches,
    widthM,
    heightM,
    cabinets: count * count,
    cabinetsWide: count,
    cabinetsHigh: count,
    resolutionX: count * cabinet.pixelsX,
    resolutionY: count * cabinet.pixelsY,
    panelCostEur: count * count * PANEL_PRICE_EUR,
  };
});

export function formatMeters(value: number) {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}


export function formatEuro(value: number) {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
}
