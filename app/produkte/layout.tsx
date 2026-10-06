import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LED-Heimkino Modelle von 108 bis 271 Zoll",
  description:
    "LED-Heimkino Modelle von 108 bis 271 Zoll mit exakten Maßen, Auflösung und technischer Konfiguration.",
  alternates: {
    canonical: "/produkte",
  },
  openGraph: {
    title: "LED-Heimkino Modelle von 108 bis 271 Zoll",
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
