## Project init

```bash
yarn create react-app . --template typescript
```

## Add husky

```bash
yarn add -D husky
```

## Husky init

```bash
npx husky init
```

> Remove .husky.pre-commit

## Add ESLint + Prettier

```bash
yarn add -D eslint prettier
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-import
```

## ESlint setting (eslint.config.js)

```javascript
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
```

## Prettier setting

```javascript
export default {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
};
```

## In package.json

```json
"scripts": {
    // ...
    "prepare": "husky install",
    "lint": "eslint . --ext .ts,.tsx",
    "format": "prettier --write .",
    "format:check": "prettier --check ."
    // ...
  },
// delete
//"eslintConfig": {
//  "extends": [
//  "react-app",
//  "react-app/jest"
//  ]
//},
```

## husky apply

```bash
yarn prepare
```
