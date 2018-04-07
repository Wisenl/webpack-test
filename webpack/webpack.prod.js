import baseConfig from './webpack.base'
import merge from 'webpack-merge'

const prodConfig = {
  plugins: []
}

export default merge(baseConfig, prodConfig)
