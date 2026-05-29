import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// Base path:
//  - "/<repo-name>/" for a GitHub Pages project site (current setup)
//  - "/" for a custom domain or <user>.github.io root site
// This is the test deploy at sindbad-SH.github.io/adventure-storytelling-media/.
// When you later move to the custom domain, set VITE_BASE=/ (or change the default).
const base = process.env.VITE_BASE || "/adventure-storytelling-media/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
});
