import type { APIContext } from "astro";

export function GET({ site }: APIContext) {
  if (!site) {
    throw new Error("Configure site in astro.config.mjs to generate robots.txt.");
  }

  return new Response(`User-agent: *\nAllow: /\nSitemap: ${new URL("sitemap-index.xml", site)}\n`);
}
