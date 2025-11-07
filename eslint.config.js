import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  ...js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      "**/*.cjs",
      "node_modules",
      "dist",
      ".zip",
      ".gitignore",
      "package.json",
      "package-lock.json",
      ".npmrc",
      "*.d.ts",
      "src/assets/**",
    ],
  },
]);
