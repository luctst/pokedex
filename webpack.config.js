/**
 * Variables
 */
const path = require("path");
const extractCss = require("mini-css-extract-plugin");

/**
 * Export
 */
module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "pokedex", "index.js"),
    output: {
        path: path.resolve(__dirname, "docs", "pokedex"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "pokedex", "webpack-server"),
        compress: true,
        port: 8080,
        open: true,
        disableHostCheck: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [extractCss.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(jpg|png|svg|jpeg|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {name:"[name].[ext]",outputPath: "img/"}
                }]
            }
        ]
    },
    plugins: [
        new extractCss({
            filename: "style.css"
        }),
    ]
};