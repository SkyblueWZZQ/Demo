const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
	},
	output: {
		path: __dirname + '/release',
		filename: './bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'template/index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'release'),
		compress: true,  // gzip
		port: 9000
	}
};