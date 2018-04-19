const path = require('path')
const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const devConfig = require('./webpack/webpack.dev')

// run development at local server
const devStart = (app, options) => {
  const compiler = webpack(devConfig)
  app.use(webpackDevMiddleware(compiler))
  app.use(webpackHotMiddleware(compiler))
  app.use(express.static(path.resolve(__dirname, '..', 'dist')))
}
// run production at local server
const prodStart = (app, options) => {
  const publicPath = options.publicPath || '/'
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build')

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy

  // app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req, res) => res.sendFile(path.resolve(outputPath, 'index.html')))
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

app.listen(3000, () => {
  console.info('http server running!')
})
