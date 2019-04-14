const webpackConfig = require("./webpack/webpack-config");
const modules = require("./webpack/webpack-module");
const plugins = require("./webpack/webpack-plugin");

/**
 * Export
 */
module.exports = env => {
    const packConfig = webpackConfig(env.filename);
    return {
        ...packConfig,
        module: modules,
        plugins,
    }
}