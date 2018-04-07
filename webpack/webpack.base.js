const path = require('path')
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin')

const baseConfig = {
  entry: '../src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve()
  },
  plugins: [
    new DllReferencePlugin({
      manifest: require('./dist/polyfill.manifest.json')
    })
  ]
}

export default baseConfig
