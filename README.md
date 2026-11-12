# Joakim Rosenstam — Portfolio

A personal portfolio built with Astro and Tailwind CSS. The shared visual theme is defined in `src/styles/global.css`.

## Development

Requires Node.js 22.23.4 or newer.

```sh
npm install
npm run dev
npm run build
npm run preview
```

The static production site is generated in `dist/`. Netlify can deploy it with `npm run build` as the build command and `dist` as the publish directory; those settings are also recorded in `netlify.toml`.

The theme follows the operating system by default. Visitors can toggle light and dark mode in the navigation; their choice is saved locally.
