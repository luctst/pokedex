const path = require("path");

module.exports = filename => {
	return {
		mode: "development",
		entry: path.resolve(`${filename}`, "index.js"),
		output: {
			path: path.resolve("docs"),
			path: filename === "client" ? path.resolve("docs") : path.resolve("client", "webpack-server", "projects", `${filename}`),
			filename: "[name].[hash].bundle.js"
		},
		optimization: {
			splitChunks: {
				chunks: "all"
			}
		},
		target: "web",
		devServer: {
			contentBase: filename === "client" ? path.resolve(`${filename}`, "webpack-server") : path.resolve("client", "webpack-server", "projects", `${filename}`),
			compress: true,
			port: 8080,
			open: true,
			disableHostCheck: true,
			historyApiFallback: true,
		},
	}
}
