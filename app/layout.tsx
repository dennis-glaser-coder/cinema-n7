import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CINEMA N°7",
  description: "Private theatres, designed around Direct View LED.",
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
