import js from "@eslint/js";
import tseslint from "typescript-eslint";

module.exports = [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module", // ✅ ensures ESM import/export is parsed correctly
        ecmaVersion: "latest",
      },
    },
  },
];
