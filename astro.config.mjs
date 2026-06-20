// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://aoristos.net',
  base: 'aoristos-main',
  vite: {
    plugins: [tailwindcss()]
  }
});
