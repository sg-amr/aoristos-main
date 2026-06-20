// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://sg-amr.github.io',
  base: '/aoristos-main'
  vite: {
    plugins: [tailwindcss()]
  }
});
