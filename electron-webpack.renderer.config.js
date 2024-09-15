const path = require("node:path");

module.exports = {
	resolve: {
		alias: {
			"@code": path.resolve(__dirname, "src/renderer"),
		},
	},
};
