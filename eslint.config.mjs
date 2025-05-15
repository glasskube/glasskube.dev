import docusaurusEslintPlugin from '@docusaurus/eslint-plugin';
import pluginJs from '@eslint/js';
import pluginPrettierConfig from 'eslint-config-prettier';
import prettierEslintPlugin from 'eslint-plugin-prettier';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {ignores: ['.docusaurus/*', 'build/*']},
  {
    plugins: {
      prettier: prettierEslintPlugin,
      '@docusaurus': docusaurusEslintPlugin,
    },
  },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {jsx: true},
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginPrettierConfig,
  pluginReactConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      '@docusaurus/no-html-links': 'warn',
      '@docusaurus/no-untranslated-text': 'off',
      '@docusaurus/string-literal-i18n-messages': 'warn',
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
