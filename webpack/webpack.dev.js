const path = require('path')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

const devConfig = {
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist'
  // },
  plugins: [
    new HtmlPlugin({
      template: path.join(__dirname, '../index.html'),
      path: path.resolve(__dirname, '../dist'),
      filename: 'index.html'
    }),
    new HotModuleReplacementPlugin()
  ]
}

module.exports = merge(baseConfig, devConfig)
