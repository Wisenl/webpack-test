const path = require('path')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

const baseConfig = {
  entry: ['webpack-hot-middleware/client?noInfo=true&reload=true', path.resolve(__dirname, '..', 'main.js')],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // loaders: ['babel-loader'],
        use: [{
          loader: 'babel-loader',
          query: {
            // 将 babel 编译过的模块缓存在 webpack_cache 目录下，下次优先复用
            cacheDirectory: './webpack_cache/'
          }
        }],
        include: [path.resolve(__dirname, '..', 'src'), path.resolve(__dirname, '..', 'main.js')]
      }
    ]
  },
  plugins: [
    new DllReferencePlugin({
      manifest: require('../dist/vendor/vendor.redux.manifest')
    })
  ]
}

module.exports = baseConfig
