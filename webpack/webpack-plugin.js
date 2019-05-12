const extractCss = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = filename => {
	return [
		new extractCss({
			filename: "style.css"
		}),
		new htmlWebpackPlugin({
			inject: true,
			template: `${filename}/webpack-server/index.html`
		})
	]
}
