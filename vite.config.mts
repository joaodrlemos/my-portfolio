import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  cacheDir: '.vite_cache',
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            return 'vendor';
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pictures': path.resolve(__dirname, 'src/assets/pictures'),
      '@logos': path.resolve(__dirname, 'src/assets/logos'),
      '@docs': path.resolve(__dirname, 'src/assets/docs'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
