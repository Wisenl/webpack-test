const path = require('path')
const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const devConfig = require('./webpack/webpack.dev')

const devStart = (app, options) => {
  return app
}
const prodStart = (app, options) => {
  return app
}
const setup = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production'
  if (isProd) {
    prodStart(app, options)
  } else {
    devStart(app, options)
  }
  return app
}
const app = express()
setup(app, devConfig)

const compiler = webpack(devConfig)
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.use(express.static(path.resolve(__dirname, '..', 'dist')))
app.listen(3000, () => {
  console.info('http server running!')
})
