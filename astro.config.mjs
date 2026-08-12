import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      // Section-level feature flags (build-time only; changing these requires a rebuild).
      GITHUB_FF: envField.boolean({ context: "server", access: "public", default: true }),
      FEATURED_PROJECTS_FF: envField.boolean({ context: "server", access: "public", default: true }),
      BLOG_FF: envField.boolean({ context: "server", access: "public", default: false }),
    },
  },

  adapter: cloudflare(),
});