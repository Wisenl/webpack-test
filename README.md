# webpack-test

从无到有使用 webapck 搭建一个高性能，可扩展的 react 项目



* 开发环境

  需要：优化开发体验、减少构建时间

  不需要：代码压缩、模块拆包、持久化缓存、减少包文件大小

* 生产环境：

  需要： 代码压缩、模块拆包、持久化缓存、减少包文件大小

  不需要：优化开发体验、减少构建时间



优化开发体验：

1. 自动刷新，热模块更新
2. 配置source-map

减少构建时间：

1. 减小模块查找范围，缩小 Babel 的编译范围，并使用 webpack cache 缓存模块
2. 使用 DLLPlugin 预先打包好第三方库
3. 使用 Happypack 加速构建
4. 不用使用 webpack css 模块化方案



代码压缩，模块拆包、持久化缓存：

1. 使用DllPlugin, UglifyJsPlugin,  tree shaking







