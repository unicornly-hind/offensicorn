import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [react(), icon({
  iconDir: "src/custom/icons",
  })],
  adapter: netlify(),
});
