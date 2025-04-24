// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://Mauro11F.github.io',
  base: 'Mauro11F.github.io',
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});
