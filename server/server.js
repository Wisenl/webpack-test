const path = require('path')
const express = require('express')
const devConfig = require('./webpack/webpack.dev')
const serverProdUtil = require('./utils/serverProdUtil')
const serverDevUtil = require('./utils/serverDevUtil')
const app = express()

const isProd = process.env.NODE_ENV === 'production'
// run development at local server
isProd && serverProdUtil(app, {})

// run production at local server
isProd || serverDevUtil(app, devConfig)

app.listen(3000, () => {
  console.info('http server running!')
})
