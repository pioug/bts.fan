import globals from 'globals';
import js from '@eslint/js';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  ...eslintPluginSvelte.configs['flat/recommended'],
  eslintPluginPrettierRecommended,
  {
    ignores: ['.svelte-kit/']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];
