const baseConfig = require('./webpack.base')
const merge = require('webpack-merge')

if (process.env.NODE_ENV !== 'production') {
  console.error('ERROR! not production environment!')
  process.exit(1)
}
const prodConfig = {
  plugins: []
}

module.exports = merge(baseConfig, prodConfig)
