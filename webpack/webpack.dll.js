// import path from 'path'
const DllPlugin = require('webpack/lib/DllPlugin')
const path = require('path')

module.exports = {
  entry: {
    react: ['redux']
  },
  output: {
    filename: 'vendor.[name]_[hash]_dll.js',
    path: path.resolve(__dirname, '..', 'dist'),
    library: '_dll_[name]'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, '..', 'dist', 'vendor.[name].manifest.json')
    })
  ]
}
