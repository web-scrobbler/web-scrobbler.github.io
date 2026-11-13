import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import solidPlugin from 'eslint-plugin-solid';
import tsdoc from 'eslint-plugin-tsdoc';
export default [
	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'.solid/**',
			'src/assets/icons.tsx',
			'.*',
		],
	},
	js.configs.recommended,
	solidPlugin.configs['flat/recommended'],
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			globals: globals.browser,
			parser: tsParser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: fileURLToPath(new URL('.', import.meta.url)),
				ecmaVersion: 2018,
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
			tsdoc,
			react: reactPlugin,
		},
		rules: {
			'tsdoc/syntax': 'warn',
			'no-undef': 'off',
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/no-unknown-property': 'off',
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'@typescript-eslint/ban-ts-comment': 'off',
			'prefer-const': ['error', { destructuring: 'all' }],
		},
	},
	{
		files: ['*.config.mjs'],
		languageOptions: {
			globals: globals.node,
		},
	},
];
