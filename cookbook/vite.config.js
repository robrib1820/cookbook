import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/cookbook/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cookbook: resolve(__dirname, "src/pages/cookbook.html"),
        recipe: resolve(__dirname, "src/pages/recipe.html"),
        login: resolve(__dirname, "src/pages/login.html"),
      },
    },
  },
});










