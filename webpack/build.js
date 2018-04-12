const prodConfig = require('./webpack.prod')
const webpack = require('webpack')

/*
传入回调函数才会执行 webpack complier
回调函数进行错误处理
 */
webpack(prodConfig, (err, stats) => {
  if (err) {
    console.error(err.stack || err)
    if (err.details) {
      console.error(err.details)
    }
    return
  }
  /*
  输入转输出（ 到终端）
   */
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  const info = stats.toJson()

  if (stats.hasErrors()) {
    console.error(info.errors)
  }

  if (stats.hasWarnings()) {
    console.warn(info.warnings)
  }
  console.log('  Build complete.  ')
})
