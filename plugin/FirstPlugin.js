const pluginName = 'ConsoleLogOnBuildWebpackPlugin'

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建过程开始！')
      console.log(compilation)
    })
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin

//  一个构造函数（具名JS函数，这里用类）
//  在原型上定义apply方法，在安装插件时，会被webpack compiler调用一次
//  插件里compiler
//  compiler -> 钩子 -> 给外部留下可以注册的接口  compiler.hooks.run.tap  注册插件
//  执行时定位的插件的时机给执行了