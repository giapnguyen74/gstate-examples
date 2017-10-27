require("babel-register")({
	presets: ["es2015"]
});
const dev_server = require("../build/dev-server");

const server = require("./server");
dev_server(8080, __dirname, {}, app => {
	app.use(server);
});
