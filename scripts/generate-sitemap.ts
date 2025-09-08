import { writeFileSync } from "fs";
import { resolve } from "path";

const origin = process.env.SITE_ORIGIN || "https://moderneer.example";
const routes = [
  "/",
  "/offerings",
  "/offerings/maturity-model",
  "/offerings/bootcamp",
  "/offerings/advisory",
  "/insights",
  "/about",
  "/contact"
];

const urls = routes
  .map(
    (p) =>
      `<url><loc>${origin}${p}</loc><changefreq>weekly</changefreq><priority>${
        p === "/" ? "1.0" : "0.7"
      }</priority></url>`,
  )
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const out = resolve(__dirname, "../apps/site/dist/sitemap.xml");
writeFileSync(out, xml);
console.log("sitemap.xml written:", out);
