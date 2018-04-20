const path = require('path')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

if (process.env.NODE_ENV !== 'production') {
  console.error('ERROR! not production environment!')
  process.exit(1)
}
const prodConfig = {
  entry: path.resolve(__dirname, '..', '..', 'main.js'),
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(process.cwd(), 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'index.html'),
      path: path.resolve(process.cwd(), 'dist'),
      filename: 'index.html'
    })
  ]
}

module.exports = merge(baseConfig, prodConfig)
