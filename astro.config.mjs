import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://karol-tajdus-ai.active-stoat-0596.chatgpt.site',
  vite: { plugins: [tailwindcss()] },
});
