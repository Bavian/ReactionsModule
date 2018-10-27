module.exports = {
	entry: './src/index.js',
	output: {
		filename: './ReactionsModule.js'
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					'less-loader'
				]
			}
		]
	}
}
