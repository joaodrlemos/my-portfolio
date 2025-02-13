import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 80 },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "cleanupIDs", active: false },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          redux: ["@reduxjs/toolkit", "react-redux"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
    conditions: ["module"],
  },
  assetsInclude: ["**/*.otf", "**/*.woff", "**/*.woff2"],
  define: {
    "process.env": {},
  },
});
