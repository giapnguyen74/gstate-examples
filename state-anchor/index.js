const baseConfig = require("./webpack.config");
const dev_server = require("../build/dev-server");

dev_server(8080, baseConfig);
