import baseConfig from './webpack.base'
import merge from 'webpack-merge'

const devConfig = {
  plugins: []
}

export default merge(baseConfig, devConfig)
