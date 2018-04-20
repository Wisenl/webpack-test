// 在本地启动 配置了开发环境 的服务，
// 方便我们开发调试， 优化开发体验

const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = function serverDevUtil (app, webpackConfig) {
  const compiler = webpack(webpackConfig)
  const middleware = webpackDevMiddleware(compiler)
  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))

  const fs = middleware.fileSystem
  app.get('*', (req, res) => {
    fs.readFile(path.join(compiler.outputPath, 'index.html'), (err, file) => {
      err ? res.sendStatus(404) : res.send(file.toString())
    })
  })
}
