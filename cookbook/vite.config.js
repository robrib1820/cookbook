import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  publicDir: "public",

  build: {
    outDir: "dist",
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        login: resolve(__dirname, "src/pages/login.html"),
        cookbook: resolve(__dirname, "src/pages/cookbook.html"),
        recipe: resolve(__dirname, "src/pages/recipe.html"),
      },
    },
  },
});








