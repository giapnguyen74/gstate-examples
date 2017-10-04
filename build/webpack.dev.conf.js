var webpack = require("webpack");
var merge = require("webpack-merge");
var FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

module.exports = baseWebpackConfig => {
	// add hot-reload related code to entry chunks
	if (typeof baseWebpackConfig.entry == "string") {
		baseWebpackConfig.entry = [__dirname + "/dev-client.js"].concat(
			baseWebpackConfig.entry
		);
	} else {
		Object.keys(baseWebpackConfig.entry).forEach(function(name) {
			baseWebpackConfig.entry[name] = [
				__dirname + "/dev-client.js"
			].concat(baseWebpackConfig.entry[name]);
		});
	}

	return merge(baseWebpackConfig, {
		module: {},
		// cheap-module-eval-source-map is faster for development
		devtool: "#cheap-module-eval-source-map",
		plugins: [
			new webpack.DefinePlugin({
				"process.env": '"development"'
			}),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),

			new FriendlyErrorsPlugin({
				onErrors: function(severity, errors) {
					//errors.forEach(error => console.error(error.message));
				}
			})
		]
	});
};
