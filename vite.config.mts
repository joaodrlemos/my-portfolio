import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'node:path';

export default defineConfig({
  cacheDir: '.vite_cache',
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    open: true,
    strictPort: true,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
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
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@typings': path.resolve(__dirname, 'src/typings'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@docs': path.resolve(__dirname, 'src/assets/images/docs'),
      '@icons': path.resolve(__dirname, 'src/assets/images/icons'),
      '@logos': path.resolve(__dirname, 'src/assets/images/logos'),
      '@pictures': path.resolve(__dirname, 'src/assets/images/pictures'),
      '@projects': path.resolve(__dirname, 'src/assets/images/projects'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
