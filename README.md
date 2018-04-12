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





### babel 优化

使用 transform-runtime 的缺陷：

1. 受到作用域的限制，不能完全对ES6代码进行编译，
2. 每个文件都会处理，可能延长webpack打包时间

使用 babel-polyfill 的缺陷：

1. 引用文件会改变全局作用域（在非类库项目中影响不大）
2. 体积过大（200多k）

优化：在.babelrc文件中修改preset配置, 添加 **useBuiltIns** 属性。同时要安装 core-js 包作为生产环境依赖。

```javascript
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["chrome >= 59"]
      },
      "useBuiltIns": true
    }],
    "react",
    "stage-2"
  ]
}
```

这样在 文件中引用 babel-polyfill 时会自动根据配置的环境，替换为所需的 polyfill。

上例中，得到的 polyfill 文件体积就只有原 polyfill 的六分之一。







