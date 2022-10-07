const modoDev = process.env.NODE_ENV != 'production' //se não for no modo production, ele será modo Development
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin') //ñ tem mais compatbilidade
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
	mode: modoDev ? 'development' : 'production', //se for true, será modo development, se for falso será modo production
	entry: './src/principal.js'
	output: {
		filename: 'principal.js',
		path: __dirname + 'public'
	},
	devServe: {
		contentBase: "./public",
		port: 9000
	}
	optimization {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true
			})
			new OptimizeCSSAssetsPlugin({})
		]
	},
	plugins: [
		new MiniCssExtractPlugin({ //parâmetros para a função do extrator de CSS
			filename: "estilo.css",
		})
	],
	module: {
		rules: [{
			test: /\.s?[ac]css/, //testar arquivo css //[2] deixa o S, verifica se tem a ou c após, e css
			use: [
			MiniCssExtractPlugin.loader,
				//  'style-loader' //adciona CSS ao DOM injetando a tag <style> // comentado por que dá conflito com o MiniCssExtractPlugin
				'css-loader', //interpreta @import, url(), etc...
				'sass-loader',
			]
		},{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	}
}