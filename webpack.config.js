// Generated using webpack-cli https://github.com/webpack/webpack-cli

import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';


const config = {
		entry: './src/index.js',
		output: {
				path: path.resolve(__dirname, 'dist'),
		},
		devServer: {
				open: true,
				host: 'localhost',
		},
		plugins: [
				new HtmlWebpackPlugin({
						template: 'index.html',
				}),

				// Add your plugins here
				// Learn more about plugins from https://webpack.js.org/configuration/plugins/
		],
		module: {
				rules: [
						{
								test: /\.(js|jsx)$/i,
								loader: 'babel-loader',
						},
						{
								test: /\.css$/i,
								use: [
									stylesHandler,
									'css-loader',
									{
										loader: 'postcss-loader',
										options: {
												postcssOptions: {
														plugins: [
																[
																		'autoprefixer',
																		{
																				// Options
																		},
																],
														],
												},
										},
								},
								],
						},
						{
								test: /\.s[ac]ss$/i,
								use: [
										stylesHandler,
										'css-loader',
										{
											loader: 'postcss-loader',
											options: {
													postcssOptions: {
															plugins: [
																	[
																			'autoprefixer',
																			{
																					// Options
																			},
																	],
															],
													},
											},
									},
										'sass-loader',
								],
						},
						{
								test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
								type: 'asset',
						},

						// Add your rules for custom modules here
						// Learn more about loaders from https://webpack.js.org/loaders/
				],
		},
};

export default () => {
		if (isProduction) {
				config.mode = 'production';
				
				config.plugins.push(new MiniCssExtractPlugin());
				
				
		} else {
				config.mode = 'development';
		}
		return config;
};
