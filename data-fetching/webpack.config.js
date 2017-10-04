const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + "/client/index.html",
	filename: "index.html",
	inject: "body"
});

const baseConfig = {
	entry: __dirname + "/client/index.js",
	output: {
		path: __dirname + "/dist",
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
			{ test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
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
			}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
};

module.exports = baseConfig;
