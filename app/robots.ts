import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://cinema-n7.vercel.app";
const publicDomainReady = !new URL(siteUrl).hostname.endsWith(".vercel.app");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: publicDomainReady ? "/" : undefined,
      disallow: publicDomainReady ? undefined : "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
