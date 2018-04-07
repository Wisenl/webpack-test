const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const devConfig = require('./webpack.dev')
const app = express()

const compiler = webpack(devConfig)
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.listen(3000, () => {
  console.info('http server running!')
})
