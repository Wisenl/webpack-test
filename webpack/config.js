const isDev = process.env.NODE_ENV === 'production'
console.log(isDev)
module.exports = {
  devConfig: {
    host: 'localhost',
    port: '3000'
  },
  buildConfig: {
    publicPath: ''
  }
}
