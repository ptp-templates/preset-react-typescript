import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser';

const compat = new FlatCompat();

export default [
  js.configs.recommended,

  ...compat.extends('plugin:react/recommended'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    plugins: {
      import: pluginImport,
      prettier: pluginPrettier,
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+
      'import/order': ['warn', { 'newlines-between': 'always' }],
      'prettier/prettier': 'warn',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
];
