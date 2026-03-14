import type { MetadataRoute } from "next";
import { orderablePacks } from "@/lib/packs";

const BASE = "https://promax-tv-player.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const packUrls = orderablePacks.map((p) => ({
    url: `${BASE}/packs/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/orca-pro-plus`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/orca-pro-plus-apk`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...packUrls,
  ];
}
