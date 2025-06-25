import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import jsonPlugin from '@eslint/json'
import markdownPlugin from '@eslint/markdown'
import cssPlugin from '@eslint/css'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'

export default defineConfig([
  // JS/TS
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },

  // Vue
  {
    files: ['**/*.vue'],
    plugins: {
      vue: pluginVue,
    },
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      ...pluginVue.configs['flat/essential'].rules,
      'vue/multi-word-component-names': 'off',
    },
  },

  // JSON
  {
    files: ['**/*.json'],
    plugins: { json: jsonPlugin },
    rules: {
      ...jsonPlugin.configs.recommended.rules,
    },
  },

  // Markdown
  {
    files: ['**/*.md'],
    plugins: { markdown: markdownPlugin },
    languageOptions: {
      parser: 'espree',
    },
    rules: {
      ...markdownPlugin.configs.recommended.rules,
    },
  },

  // CSS
  {
    files: ['**/*.css'],
    plugins: { css: cssPlugin },
    rules: {
      ...cssPlugin.configs.recommended.rules,
    },
  },

  // Prettier
  {
    files: ['**/*.{js,ts,vue}'],
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
    },
  },

  // ignore
  {
    ignores: [
      '**/node_modules/**',
      '**/.output/**',
      '**/.nuxt/**',
      '**/dist/**',
      '**/*.json',
      '**/*.css',
      '**/package.json',
      '**/package-lock.json',
      '**/tsconfig.json',
    ],
  },
])
