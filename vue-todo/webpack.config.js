const baseConfig = {
	module: {
		loaders: [
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
	}
};

module.exports = baseConfig;
