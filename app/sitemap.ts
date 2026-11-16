import type { MetadataRoute } from "next";
import { workProjects } from "@/data/work";

const siteUrl = "https://www.josephmmadubuike.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/portfolio`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteUrl}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/portfolio/kwechiri`, changeFrequency: "monthly", priority: 0.9 },
    ...workProjects.map((project) => ({
      url: `${siteUrl}/portfolio/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
