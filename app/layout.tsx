import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "../components/site-footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cinema-n7.vercel.app";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const publicDomainReady = !new URL(siteUrl).hostname.endsWith(".vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LED-Wand fürs Heimkino | CINEMA N°7",
    template: "%s | CINEMA N°7",
  },
  description:
    "Exklusive LED-Wände fürs Heimkino von 136 bis 271 Zoll. Modelle und Komplettpreise inklusive Planung, Installation und Kalibrierung. Showroom in Paderborn.",
  keywords: [
    "LED Heimkino",
    "LED Wand Heimkino",
    "Direct View LED Heimkino",
    "LED statt Beamer",
    "LED Wand privat",
    "Fine Pitch LED Heimkino",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LED-Wand fürs Heimkino | CINEMA N°7",
    description:
      "Exklusive LED-Heimkinos für Zuhause. Entdecken Sie Modelle, Komplettpreise und unseren Showroom in Paderborn.",
    url: "/",
    siteName: "CINEMA N°7",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LED-Wand fürs Heimkino | CINEMA N°7",
    description:
      "Exklusive LED-Heimkinos für Zuhause. Entdecken Sie Modelle, Komplettpreise und unseren Showroom in Paderborn.",
  },
  robots: {
    index: publicDomainReady,
    follow: true,
    googleBot: {
      index: publicDomainReady,
      follow: true,
    },
  },
  verification: googleVerification
    ? { google: googleVerification }
    : undefined,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CINEMA N°7",
  url: siteUrl,
  inLanguage: "de-DE",
  description:
    "Großformatige Fine-Pitch LED-Heimkinos für private Räume.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CINEMA N°7",
  url: siteUrl,
  email: "info@cinema7.de",
  telephone: "+49 5251 5449191",
  areaServed: ["DE", "EU"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
