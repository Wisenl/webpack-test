const path = require('path')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

if (process.env.NODE_ENV !== 'production') {
  console.error('ERROR! not production environment!')
  process.exit(1)
}
const prodConfig = {
  entry: {
    main: path.resolve(__dirname, '..', '..', 'main.js'),
    vendor: ['react']
  },
  output: {
    // webpack hash 的两种算法 [hash], [chunkhash] 第一种为所有资源生成一个唯一hash，第二种为不同资源生成不同hush
    filename: '[name].[chunkhash:8].js',
    path: path.resolve(process.cwd(), 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'index.html'),
      path: path.resolve(process.cwd(), 'dist'),
      filename: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      children: true,
      minChunks: 2,
      async: true
    }),
    // 由于webpack 默认使用 模块ID 来生成hush值， ID 的变动会导致 hash 的改变，影响 chunk 缓存策略。使用该插件可生成稳定 ID 从而解决问题
    // 也可使用 NamedModulesPlugin
    new webpack.optimize.HashedModuleIdsPlugin()
  ]
}

module.exports = merge(baseConfig, prodConfig)
