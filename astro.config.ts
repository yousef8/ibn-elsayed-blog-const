import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { LOCALE, SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  ...(SITE.base && import.meta.env.PROD && { base: SITE.base }),
  i18n: {
    locales: [...LOCALE.locales], // spread operator is used because LOCALE.locales is readonly
    defaultLocale: LOCALE.defaultLocale,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  experimental: {
    contentLayer: true,
  },
});
