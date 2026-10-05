import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CINEMA N°7 — Private Theatres",
    template: "%s — CINEMA N°7",
  },
  description:
    "Private Kinos mit Direct View LED, Raumakustik und präziser architektonischer Integration.",
  openGraph: {
    title: "CINEMA N°7 — Private Theatres",
    description:
      "Kino. Ohne Projektion. Private Kinos mit Direct View LED.",
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
