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
        loaders: ['babel-loader'],
        include: [path.resolve(__dirname, '..', 'src'), path.resolve(__dirname, '..', 'main.js')]
      }
    ]
  },
  // plugins: [
  //   new DllReferencePlugin({
  //     manifest: require('../dist/vendor/vendor.redux.manifest')
  //   })
  // ]
}

module.exports = baseConfig
