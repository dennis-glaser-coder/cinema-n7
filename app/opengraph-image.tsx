import { ImageResponse } from "next/og";

export const alt = "CINEMA N°7 — LED-Heimkino mit großformatiger Bildwand";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// A photographic preview reads much better than oversized text in small mobile cards.
const heroPhoto = "https://raw.githubusercontent.com/dennis-glaser-coder/cinema-n7/main/Luxuri%C3%B6ses%20Heimkino%20mit%20Leopardenbild.png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#030303",
        }}
      >
        <img
          src={heroPhoto}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </div>
    ),
    size
  );
}
