var webpack = require("webpack");
var merge = require("webpack-merge");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (appPath, moreConfig = {}) => {
	const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
		template: appPath + "/client/index.html",
		filename: "index.html",
		inject: "body"
	});

	return merge(moreConfig, {
		entry: [__dirname + "/dev-client.js", appPath + "/client/index.js"],
		output: {
			path: appPath + "/dist",
			filename: "index_bundle.js"
		},
		// cheap-module-eval-source-map is faster for development
		devtool: "#cheap-module-eval-source-map",
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: "babel-loader",
					exclude: /node_modules/
				},
				{
					test: /\.jsx$/,
					loader: "babel-loader",
					exclude: /node_modules/
				},
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"]
				},
				{
					test: /\.(jpg|png|svg)$/,
					loader: "file-loader",
					options: {
						name: "[path][name].[hash].[ext]"
					}
				},
				{
					test: /\.vue$/,
					loader: "vue-loader",
					exclude: /node_modules/
				}
			]
		},
		resolve: {
			alias: {
				vue$: "vue/dist/vue.esm.js"
			}
		},
		plugins: [
			HtmlWebpackPluginConfig,
			new webpack.DefinePlugin({
				"process.env": '"development"'
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),

			new FriendlyErrorsPlugin({
				onErrors: function(severity, errors) {
					errors.forEach(error => console.error(error));
				}
			})
		]
	});
};
