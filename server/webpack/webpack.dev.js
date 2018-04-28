const conf = require('../config')
const path = require('path')
const glob = require('glob')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

// 在生成的 html 文件中添加其他 script 资源
let dllPathArr = []
let vendorPath = path.resolve(process.cwd(), 'dist/vendor')
// 使用 glob 获取打包好的 vendor 资源
glob.sync(`${vendorPath}/*.js`).forEach((dllPath) => {
  dllPathArr.push(
    new AddAssetHtmlPlugin({
      filepath: dllPath,
      includeSourcemap: false
    })
  )
})

const devConfig = {
  // 开发环境不使用 [hush], 减少打包时间
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(process.cwd(), 'main2.js'), path.resolve(process.cwd(), 'main.js')],
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
      inject: true,
      path: path.resolve(__dirname, '../dist'),
      filename: 'index.html'
    }),
    new HotModuleReplacementPlugin(),
    new DllReferencePlugin({
      manifest: require('../../dist/vendor/vendor.react.manifest.json')
    }),
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
  ].concat(dllPathArr) // 追加 AddAsset 插件
}

module.exports = merge(baseConfig, devConfig)
