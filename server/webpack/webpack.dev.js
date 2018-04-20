const conf = require('../config')
const path = require('path')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

const devConfig = {
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, '..', '..', 'main.js')],
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist')
  },
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist'
  // },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '../../index.html'),
      path: path.resolve(__dirname, '../dist'),
      filename: 'index.html'
    }),
    new HotModuleReplacementPlugin(),
    new FriendlyErrorPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${conf.devConfig.host}:${conf.devConfig.port}`]
      },
      onErrors: function (severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      },
      // should the console be cleared between each compilation?
      // default is true
      clearConsole: true
    })
  ]
}

module.exports = merge(baseConfig, devConfig)
