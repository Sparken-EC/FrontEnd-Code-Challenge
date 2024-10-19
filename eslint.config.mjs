import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
	},
	{
		languageOptions: { globals: globals.node },
	},
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
		},
	},
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	eslintPluginPrettierRecommended,
];
