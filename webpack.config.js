module.exports = {
	entry: './src/index.js',
	output: {
		filename: './ReactionsModule.js',
    library: 'ReactionsModule',
    libraryTarget: 'umd'
	},
	module: {
		rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
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
