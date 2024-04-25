import { VICTOR_PORTFOLIO_BASE_URL } from "@/constants";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },

    sitemap: `${VICTOR_PORTFOLIO_BASE_URL}/sitemap.xml`,
  };
}
