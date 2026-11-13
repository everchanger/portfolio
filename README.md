# Joakim Rosenstam — Portfolio

A personal portfolio built with Astro and Tailwind CSS. The shared visual theme is defined in `src/styles/global.css`.

## Development

Requires Node.js 22.23.4 or newer.

```sh
npm install
npm run dev
npm run build
npm run test:seo
npm run preview
```

The static production site is generated in `dist/`. Netlify can deploy it with `npm run build` as the build command and `dist` as the publish directory; those settings are also recorded in `netlify.toml`.

The canonical site URL is configured in `astro.config.mjs`. The build uses it for canonical links, the sitemap, and `robots.txt`; update it there if the production domain changes. `npm run test:seo` checks the generated crawl and metadata signals.

The theme follows the operating system by default. Visitors can toggle light and dark mode in the navigation; their choice is saved locally.
