import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: "@typescript-eslint/parser",
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off", // React 17+
      "import/order": ["warn", { "newlines-between": "always" }],
      "prettier/prettier": "warn",
    },
  },
];
