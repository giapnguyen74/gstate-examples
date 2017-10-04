require("babel-register");
const baseConfig = require("./webpack.config");
const dev_server = require("../build/dev-server");
const server = require("./server");
dev_server(8080, baseConfig, app => {
	app.use(server);
});
