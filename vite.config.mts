import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import compression from 'vite-plugin-compression';

export default defineConfig({
  cacheDir: '.vite_cache',
  plugins: [react(), compression()],
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
    assetsInlineLimit: 8192,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            return 'vendor';
          }
        },
      },
      onwarn(warning, warn) {
        if (warning.message.includes('"use client"')) {
          return;
        }
        warn(warning);
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@typings': path.resolve(__dirname, 'src/typings'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  logLevel: 'info',
});
