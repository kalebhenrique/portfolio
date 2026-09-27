// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

const SITE = process.env.SITE || "https://kalebhenrique.vercel.app";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: "static",
  adapter: vercel(),
  security: {
    checkOrigin: false,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  server: {
    host: true,
  },
});
