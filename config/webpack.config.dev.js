// Tools
const { merge } = require('webpack-merge');

// Local
const paths = require('./paths');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: paths.appDist,
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
  },
});
