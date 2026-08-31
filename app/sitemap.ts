import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "",
    "/about-us",
    "/blog",
    "/contact-us",
    "/disclaimer",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
