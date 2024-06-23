const js = require('@eslint/js');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const reactPlugin = require('eslint-plugin-react');

module.exports = {
	files: ['**/*.ts', '**/*.tsx', '**/*.jsx'],
	languageOptions: {
		parser: tsParser,
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		globals: {
			browser: true,
			es2021: true
		}
	},
	plugins: {
		'@typescript-eslint': tsPlugin,
		prettier: prettierPlugin,
		react: reactPlugin
	},
	rules: {
		...js.configs.recommended.rules,
		...tsPlugin.configs['recommended'].rules,
		...prettierConfig.rules,
		'prettier/prettier': 'error',
		'import/no-extraneous-dependencies': 'off',
		// 'import/no-unresolved': 'error',
		'react/react-in-jsx-scope': 'off',
		// "no-empty-interface": true,
		'react/no-unused-prop-types': 'off',
		// '@typescript-eslint/no-explicit-any': 'off',
		// 'operator-linebreak': ['error', 'after'],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'implicit-arrow-linebreak': 'off',
		'lines-between-class-members': 'off',
		'react/jsx-closing-bracket-location': [1, 'after-props'],
		'object-curly-newline': [
			'error',
			{
				consistent: true
			}
		],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
		'linebreak-style': [2, 'unix'],
		'no-console': [0],
		'max-len': [1, 100],
		'import/order': 'off',
		'prefer-const': 1,
		// 'sort-imports': ['error', { ignoreDeclarationSort: true }],
		'func-names': ['error', 'as-needed'],
		'arrow-body-style': 'off',
		'import/no-duplicates': 'off',
		'import/no-self-import': 'off',
		'import/no-cycle': 'off',
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
		'react/require-default-props': [0],
		'react/jsx-one-expression-per-line': ['off'],
		'import/extensions': 'off',
		'no-trailing-spaces': [
			2,
			{
				skipBlankLines: false
			}
		],
		'arrow-spacing': [
			2,
			{
				before: true,
				after: true
			}
		],
		'import/no-dynamic-require': 0,
		'global-require': 0,
		'react/jsx-max-props-per-line': [0],
		'react/jsx-first-prop-new-line': [0, 'multiline'],
		'react/jsx-boolean-value': [1],
		'newline-per-chained-call': [0],
		'react/jsx-props-no-spreading': 'off',
		// reference from: https://github.com/airbnb/javascript
		'no-new-object': ['error'],
		'object-shorthand': [
			'error',
			'always',
			{
				avoidQuotes: true,
				avoidExplicitReturnArrows: false
			}
		],
		'quote-props': ['error', 'as-needed'],
		'prefer-object-spread': ['error'],
		// 'prefer-destructuring': ['error'],
		'prefer-template': ['error'],
		'template-curly-spacing': ['error', 'never'],
		'no-eval': ['error'],
		'func-style': [
			'error',
			'expression',
			{
				allowArrowFunctions: true
			}
		],
		'no-param-reassign': ['error'],
		'prefer-arrow-callback': ['error'],
		'arrow-parens': ['error', 'as-needed'],
		// 'implicit-arrow-linebreak': ['error'],
		'no-duplicate-imports': ['error'],
		// 'no-undef': ["error"],
		'no-plusplus': ['error'],
		'spaced-comment': ['error'],
		// react
		'react/no-array-index-key': ['error'],
		'no-multi-spaces': 2,
		// typescript
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-shadow': ['off'],
		'@typescript-eslint/no-throw-literal': ['off'],
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/lines-between-class-members': ['off'],
		'@typescript-eslint/indent': ['error', 'tab'] // Tab indentation for TypeScript
	}
};
