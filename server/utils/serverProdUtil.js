// 在本地启动 配置了生产环境 的服务，
// 方便我们模拟真实线上环境，进行测试

const path = require('path')
const express = require('express')
const compression = require('compression')

module.exports = function serverProdUtil (app, options) {
  const publicPath = options.publicPath || '/'
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'dist')
  // 使用compression 中间件可以压缩发送的内容 ~~
  app.use(compression())
  app.use(publicPath, express.static(outputPath))
  app.get('*', (req, res) => res.sendFile(path.resolve(process.cwd(), 'dist', 'index.html')))
}
