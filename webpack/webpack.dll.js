import path from 'path'
import DllPlugin from 'webpack/lib/DllPlugin'

export default {
  entry: [],
  output: {
    filename: '[name]_dll.js',
    path: path.resolve(__dirname, 'dist'),
    library: '_dll_[name]'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, 'dist', '[name].manifest.js')
    })
  ]
}
