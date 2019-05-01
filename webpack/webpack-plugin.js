const extractCss = require("mini-css-extract-plugin");
const clean = require("clean-webpack-plugin");

module.exports = [
    new clean(),
    new extractCss({
        filename: "style.css"
    })
]