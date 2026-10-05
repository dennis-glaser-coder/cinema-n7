import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CINEMA N°7 — Exklusive LED-Heimkinos",
    template: "%s — CINEMA N°7",
  },
  description:
    "Exklusive LED-Heimkinos mit großformatigen Fine-Pitch LED-Bildsystemen, individuell konfiguriert und präzise kalibriert.",
  openGraph: {
    title: "CINEMA N°7 — Exklusive LED-Heimkinos",
    description:
      "Exklusive LED-Heimkinos mit großformatigen Fine-Pitch LED-Bildsystemen.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
