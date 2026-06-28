import { createFileRoute } from "@tanstack/react-router";

import { articles } from "@/data/articles";
import { categories } from "@/data/categories";

const BASE_URL = "";







export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries = [
        { path: "/", changefreq: "weekly", priority: "1.0" },
        { path: "/learn", changefreq: "weekly", priority: "0.9" },
        { path: "/blog", changefreq: "weekly", priority: "0.8" },
        { path: "/calculators", changefreq: "monthly", priority: "0.7" },
        { path: "/about", changefreq: "monthly", priority: "0.6" },
        { path: "/contact", changefreq: "monthly", priority: "0.6" },
        { path: "/search", changefreq: "monthly", priority: "0.4" }];


        const categoryEntries = categories.map((c) => ({
          path: c.to,
          changefreq: "weekly",
          priority: "0.8"
        }));

        const articleEntries = articles.map((a) => ({
          path: `/article/${a.slug}`,
          changefreq: "monthly",
          priority: "0.7"
        }));

        const entries = [...staticEntries, ...categoryEntries, ...articleEntries];

        const urls = entries.map((e) =>
        [
        `  <url>`,
        `    <loc>${BASE_URL}${e.path}</loc>`,
        e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
        e.priority ? `    <priority>${e.priority}</priority>` : null,
        `  </url>`].

        filter(Boolean).
        join("\n")
        );

        const xml = [
        `<?xml version="1.0" encoding="UTF-8"?>`,
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
        ...urls,
        `</urlset>`].
        join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});