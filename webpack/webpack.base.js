const path = require('path')

const baseConfig = {
  entry: '../src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve()
  }
}

export default baseConfig
