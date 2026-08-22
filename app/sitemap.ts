import type { MetadataRoute } from "next";
const siteUrl="https://www.josephmmadubuike.com";
export default function sitemap():MetadataRoute.Sitemap{return [{url:siteUrl,changeFrequency:"monthly",priority:1},{url:`${siteUrl}/kwechiri`,changeFrequency:"monthly",priority:.9}]}
