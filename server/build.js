const ora = require('ora')
const chalk = require('chalk')
const prodConfig = require('./webpack/webpack.prod')
const webpack = require('webpack')
/*
传入回调函数才会执行 webpack complier
回调函数进行错误处理
 */

// TODO add  *rimraf*  package to remove old files
const spinner = ora('I Am Packaging Hard ~~~~~~~~ ').start()

webpack(prodConfig, (err, stats) => {
  spinner.stop()

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
    children: false,
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
  console.log(chalk.green('  Build complete.  '))
})
