import { ImageResponse } from "next/og";

export const alt = "CINEMA N°7 — Exklusive LED-Heimkinos";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "74px 82px",
          background:
            "radial-gradient(circle at 72% 42%, #2a1d15 0%, #0a0807 36%, #020202 72%)",
          color: "#f2efe9",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 7,
          }}
        >
          CINEMA N°7
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              lineHeight: 0.95,
              maxWidth: 850,
            }}
          >
            Exklusive LED-Heimkinos
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontFamily: "sans-serif",
              fontSize: 23,
              letterSpacing: 2,
              color: "#c4a47e",
            }}
          >
            PRIVATE RÄUME · DIRECT VIEW LED
          </div>
        </div>
      </div>
    ),
    size
  );
}
