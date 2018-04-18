// import path from 'path'
const DllPlugin = require('webpack/lib/DllPlugin')
const path = require('path')

module.exports = {
  entry: {
    redux: ['redux']
  },
  output: {
    filename: 'vendor.[name]_[hash]_dll.js',
    path: path.resolve(__dirname, '..', 'dist', 'vendor'),
    library: '_dll_[name]'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, '..', 'dist', 'vendor', 'vendor.[name].manifest.json')
    })
  ]
}
