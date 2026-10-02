// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const SITE = process.env.SITE || "https://kalebhenrique.vercel.app";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: "static",
  adapter: vercel(),
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  security: {
    checkOrigin: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap(),
  ],
  server: {
    host: true,
  },
});
