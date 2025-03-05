import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import a11y from 'eslint-plugin-jsx-a11y';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
    ignores: ['node_modules/**', 'dist/**', '.vite_cache/**'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        setTimeout: 'readonly',
        console: 'readonly',
      },
      parser: tsParser,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      react: pluginReact,
      'jsx-a11y': a11y,
      'react-hooks': reactHooks,
    },
    settings: {
      react: {
        version: '18.3',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowTernary: true,
          allowShortCircuit: true,
          allowTaggedTemplates: true,
        },
      ],
      'no-cond-assign': ['error', 'always'],
      'valid-typeof': ['error', { requireStringLiterals: true }],
      'getter-return': 'error',
      'no-prototype-builtins': 'off',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'jsx-a11y/anchor-has-content': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
];
