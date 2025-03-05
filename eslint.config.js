import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        window: true,
        document: true,
        setTimeout: true,
        console: true,
      },
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
    },
    ignores: ['node_modules/', 'dist/', '.vite_cache/'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-unused-expressions': ['error'],
      'no-empty': ['warn'],
      'no-cond-assign': ['error'],
      'valid-typeof': ['error'],
      'getter-return': ['error'],
      'no-prototype-builtins': ['warn'],
      'no-control-regex': ['error'],
      'react/jsx-boolean-value': ['error'],
      'react/jsx-curly-spacing': ['error', { when: 'always' }],
    },
  },
];
