import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  output: 'hybrid',
  adapter: netlify({
    edgeMiddleware: true,
    imageCDN: true
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
      config: { path: './tailwind.config.cjs' }
    }),
    react(),
    sitemap(),
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
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  experimental: {
    contentLayer: true
  },
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    },
    build: {
      rollupOptions: {
        external: ['@resvg/resvg-js']
      }
    }
  }
});
