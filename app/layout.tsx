import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CINEMA N°7 — Private Theatres",
    template: "%s — CINEMA N°7",
  },
  description:
    "Bespoke private theatres built around Direct View LED, immersive sound and architectural integration.",
  openGraph: {
    title: "CINEMA N°7 — Private Theatres",
    description:
      "Cinema, without projection. Bespoke private theatres built around Direct View LED.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
