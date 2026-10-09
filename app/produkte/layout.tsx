import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LED-Wand fürs Heimkino: Modelle und Preise",
  description:
    "LED-Wände fürs Heimkino von 136 bis 271 Zoll: Vergleichen Sie Bildgrößen, Auflösungen und Komplettpreise inklusive Planung, Installation und Kalibrierung.",
  alternates: {
    canonical: "/produkte",
  },
  openGraph: {
    title: "LED-Wand fürs Heimkino: Modelle und Preise",
    description:
      "LED-Heimkino Modelle mit exakten Maßen und technischer Konfiguration.",
    url: "/produkte",
  },
};

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
