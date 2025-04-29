# no name

```bash
yarn create react-app . --template typescript
```

```bash
yarn add react-router-dom
```

```bash
yarn add --dev eslint prettier husky lint-staged
yarn add --dev eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser

```

```json
// .eslint.json

{
  "parser": "@typescript-eslint/parser",
  "plugins": ["react", "react-hooks", "@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    "no-console": ["warn", { "allow": ["warn", "error", "info"] }],
    "eqeqeq": "error",
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/no-redeclare": 0
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

```json
// .prettierrc
{
  "printWidth": 80,
  "semi": true,
  "singleQuote": false,
  "trailingComma": "all",
  "tabWidth": 2,
  "bracketSpacing": true,
  "endOfLine": "auto",
  "useTabs": false,
  "arrowParens": "avoid"
}
```

```json
// package.json

 "scripts": {
    // ...
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "format": "prettier --write ."
  },

```

```bash
# install husky
yarn dlx husky install
yarn pkg set scripts.prepare "husky install"

# make pre-commit hook
yarn dlx husky add .husky/pre-commit "yarn lint-staged"

```

```json
//...
  "scripts": {
    // ...
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  },
//...
```
