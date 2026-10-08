import type { MetadataRoute } from "next";
import { cinemaModels } from "../lib/cinema-products";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cinema-n7.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/produkte",
    "/led-heimkino",
    "/led-oder-beamer",
    "/ueber-uns",
    "/warum-cinema-n7",
    "/leistungen",
    "/faq",
    "/anfrage",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : path === "/produkte" ? 0.9 : 0.7,
    })),
    ...cinemaModels.map((model) => ({
      url: `${siteUrl}/produkte/${model.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
