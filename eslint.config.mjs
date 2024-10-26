import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'no-var': 'error',
      'semi': 'error',      
      'no-multi-spaces': 'error',
      'space-in-parens': 'error',
      'no-multiple-empty-lines': 'error',
      'prefer-const': 'error',
      'no-use-before-define': 'error',
      'no-extra-semi': 'error', // запрет лишних точек с запятой — let x = 5
      'indent': ['error', 2,], // отступы в коде из 2 пробелов
      'max-len': ['error', 100], // максимальная длина строки
      'no-debugger': 0,
    },
  },
];
