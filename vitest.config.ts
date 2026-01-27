import path from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, "src/config"),
    },
  },
  test: {
    globals: true,
    environment: "node",
  },
});
