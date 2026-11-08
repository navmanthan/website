import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    // Bundled up front so lazy routes never trigger a dev-server re-optimization mid-session.
    include: ['react', 'react-dom', 'react-dom/client', 'react-router-dom', 'react-helmet-async', 'motion/react', 'lucide-react'],
  },
});
