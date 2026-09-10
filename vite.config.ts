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
      // public/images/ gets big files dropped in mid-copy — ignore to avoid the
      // Windows EBUSY crash. assets/images/proof/ IS watched so new client
      // screenshots show up live via HMR.
      ignored: ['**/public/images/**'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
