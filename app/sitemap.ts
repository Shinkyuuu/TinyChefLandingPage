import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/support", "/community-guidelines", "/delete-account", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${site.url}${path}` }));
}
