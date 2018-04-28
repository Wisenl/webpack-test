const path = require('path')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

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
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          // 在UglifyJs删除没有用到的代码时不输出警告
          warnings: false,
          // 删除所有的 `console` 语句，可以兼容ie浏览器
          drop_console: true,
          // 内嵌定义了但是只用到一次的变量
          collapse_vars: true,
          // 提取出出现多次但是没有定义成变量去引用的静态值
          reduce_vars: true
        },
        output: {
          // 最紧凑的输出
          beautify: false,
          // 删除所有的注释
          comments: false
        }
      },
      sourceMap: true,
      parallel: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css',
      // Setting the following option to `false` will not extract CSS from codesplit chunks.
      // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
      // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`,
      // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
      allChunks: true
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true,
        map: { inline: false }
      }
    }),
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
    new webpack.HashedModuleIdsPlugin()
  ]
}

module.exports = merge(baseConfig, prodConfig)
