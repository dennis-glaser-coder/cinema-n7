import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cinema-n7.vercel.app";
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LED-Heimkino für private Räume | CINEMA N°7",
    template: "%s | CINEMA N°7",
  },
  description:
    "Großformatige Fine-Pitch LED-Heimkinos für private Räume. Modelle von 136 bis 271 Zoll, Installation und Kalibrierung.",
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
    title: "CINEMA N°7 | LED-Heimkinos",
    description:
      "Großformatige Fine-Pitch LED-Heimkinos für private Räume.",
    url: "/",
    siteName: "CINEMA N°7",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CINEMA N°7 | LED-Heimkinos",
    description:
      "Großformatige Fine-Pitch LED-Heimkinos für private Räume.",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
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
  email: "kontakt@cinema7.de",
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
      </body>
    </html>
  );
}
