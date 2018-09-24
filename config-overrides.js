const path = require('path')
const glob = require('glob')
const PurgecssPlugin = require('purgecss-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = function override(config, env) {
    config.plugins = [
        ...config.plugins,
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, {
                nodir: true
            }),
        }),
    ]
    return config;
}