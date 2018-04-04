const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const config = require('./webpack.config')
const app = express()

const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))
app.listen(3000, () => {
  console.info('http server running!')
})
