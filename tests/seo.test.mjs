import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const origin = "https://joakim.rosenstam.net";
const routes = ["/", "/cv/"];
const readDist = (path) => readFile(new URL(`../dist/${path}`, import.meta.url), "utf8");

test("sitemap and robots.txt expose the canonical pages", async () => {
  const [robots, index, sitemap] = await Promise.all([
    readDist("robots.txt"),
    readDist("sitemap-index.xml"),
    readDist("sitemap-0.xml"),
  ]);
  assert.match(robots, new RegExp(`Sitemap: ${origin}/sitemap-index\\.xml`));
  assert.ok(index.includes(`<loc>${origin}/sitemap-0.xml</loc>`));
  assert.deepEqual(
    [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]).sort(),
    routes.map((route) => origin + route).sort(),
  );
});

test("each page has a unique canonical URL, title and description", async () => {
  const pages = await Promise.all(routes.map((route) => readDist(`${route.slice(1)}index.html`)));
  const titles = new Set();
  const descriptions = new Set();

  for (const [index, html] of pages.entries()) {
    assert.ok(html.includes(`<link rel="canonical" href="${origin}${routes[index]}">`));
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
    assert.ok(title);
    assert.ok(description);
    titles.add(title);
    descriptions.add(description);
  }

  assert.equal(titles.size, routes.length);
  assert.equal(descriptions.size, routes.length);
  assert.ok(pages.every((html) => !html.includes('href="/projects/"')));
  assert.match(pages[0], /id="theme-toggle"[^>]*class="[^"]*\binvisible\b[^"]*\binline-flex\b/);
});
