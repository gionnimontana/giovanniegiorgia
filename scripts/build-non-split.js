const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const TerserPlugin = require('terser-webpack-plugin');
let config = defaults.__get__('config');

config.optimization.splitChunks = {
    cacheGroups: {
        default: false,
    },
};

config.optimization.minimizer = [new TerserPlugin({
    extractComments: false,
})]

config.optimization.runtimeChunk = false;