module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:import/errors',
	],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'global-require': 0
	},
	settings: {
		'import/resolver': {
			alias: {
				map: [
					['@', './src/']
				],
				extensions: ['.js', '.vue']
			}
		}
	}
}