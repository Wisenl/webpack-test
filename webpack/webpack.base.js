const path = require('path')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

const baseConfig = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new DllReferencePlugin({
      manifest: require('../dist/vendor.redux.manifest')
    })
  ]
}

module.exports = baseConfig
