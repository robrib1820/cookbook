import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/pages/index.html"),
        recipe: resolve(__dirname, "src/pages/recipe.html"),
        cookbook: resolve(__dirname, "src/pages/cookbook.html"),
        login: resolve(__dirname, "src/pages/login.html"),
      }
    }
  }
});
