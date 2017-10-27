var path = require("path");
var express = require("express");
var webpack = require("webpack");

var devConfig = require("./webpack.dev.conf");

function run_dev_server(port, appPath, baseConfig, callback) {
	if (!callback) {
		(callback = baseConfig), (baseConfig = {});
	}

	var webpackConfig = devConfig(appPath, baseConfig);
	var app = express();
	var compiler = webpack(webpackConfig);

	var devMiddleware = require("webpack-dev-middleware")(compiler, {
		publicPath: webpackConfig.output.publicPath,
		quiet: true,
		serverSideRender: true
	});

	var hotMiddleware = require("webpack-hot-middleware")(compiler, {
		log: () => {}
	});
	// force page reload when html-webpack-plugin template changes
	compiler.plugin("compilation", function() {
		hotMiddleware.publish({ action: "reload" });
	});

	// handle fallback for HTML5 history API
	if (!callback) {
		app.use(require("connect-history-api-fallback")());
	}

	// serve webpack bundle output
	app.use(devMiddleware);

	// enable hot-reload and state-preserving
	// compilation error display
	app.use(hotMiddleware);

	app.use("static", express.static("./static"));

	var uri = "http://localhost:" + port;

	console.log("> Starting dev server...");
	devMiddleware.waitUntilValid(() => {
		console.log("> Listening at " + uri + "\n");
	});

	if (callback) {
		callback(app);
	}
	app.listen(port);
}
module.exports = run_dev_server;
