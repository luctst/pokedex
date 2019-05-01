const extractCss = require("mini-css-extract-plugin");
const clean = require("clean-webpack-plugin");

module.exports = [
    new extractCss({
        filename: "style.css"
    })
]