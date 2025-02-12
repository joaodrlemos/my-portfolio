import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
  resolve: {
    conditions: ["module"],
  },
  assetsInclude: ["**/*.otf", "**/*.woff", "**/*.woff2"],
  define: {
    "process.env": {},
  },
});
