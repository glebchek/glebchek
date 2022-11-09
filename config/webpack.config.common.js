const path = require('path');
// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

// Local
const paths = require('./paths');

module.exports = {
  entry: paths.appIndex,
  output: {
    path: paths.appDist,
    filename: '[name].[contenthash:8].js',
    publicPath: '/',
    clean: process.env.NODE_ENV === "production",
  },
  target: 'web',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(paths.appAssets, "CNAME"), to: paths.appDist },
        { from: path.resolve(paths.appAssets, ".nojekyll"), to: paths.appDist },
        { from: path.resolve(paths.appAssets, "resume.json"), to: paths.appDist },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Homepage',
      template: paths.appTemplateHtml,
    }),
    new ESLintPlugin({
      context: paths.appSrc,
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(css)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'css/[name][hash][ext]',
        },
      },
    ],
  },
};
