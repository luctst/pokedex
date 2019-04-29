const path = require("path");

module.exports = filename => {
    if (filename === "client") {
        return {
            mode: "development",
            entry: path.resolve(`${filename}`, "index.js"),
            output: {
                path: path.resolve("docs"),
                filename: "bundle.js"
            },
            target: "web",
            devServer: {
                contentBase: path.resolve(`${filename}`, "webpack-server"),
                compress: true,
                port: 8080,
                open: true,
                disableHostCheck: true,
                historyApiFallback: true,
            },
        }
    } else {
        return {
            mode: "development",
            entry: path.resolve(`${filename}`, "index.js"),
            output: {
                path: path.resolve("client", "webpack-server", "projects", `${filename}`),
                filename: "bundle.js"
            },
            target: "web",
            devServer: {
                contentBase: path.resolve(`${filename}`, "webpack-server"),
                compress: true,
                port: 8080,
                open: true,
                disableHostCheck: true,
                historyApiFallback: true,
            },
        }
    }
}