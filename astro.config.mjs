import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://karoltay.github.io',
  build: { assets: 'assets' },
  vite: { plugins: [tailwindcss()] },
});
