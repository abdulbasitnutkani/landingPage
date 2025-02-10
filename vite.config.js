import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    fs: {
      strict: false, // Allow serving files outside of src
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: "index.html", // Main app entry point
        admin: "public/admin/index.html", // Decap CMS entry point
      },
    },
  },
});
