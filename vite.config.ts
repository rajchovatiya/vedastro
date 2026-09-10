import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  build: {
    // Always emit real asset files — never inline images as base64 data URIs.
    assetsInlineLimit: 0,
  },
  server: {
    watch: {
      // Wait for images to finish copying before reacting — stops the Windows
      // EBUSY crash when large files are dropped into public/images or assets/
      // while the dev server is running.
      awaitWriteFinish: { stabilityThreshold: 400, pollInterval: 100 },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
