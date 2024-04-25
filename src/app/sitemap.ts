import { VICTOR_PORTFOLIO_BASE_URL } from "@/constants";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: VICTOR_PORTFOLIO_BASE_URL,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "weekly",
    },
  ];
}
