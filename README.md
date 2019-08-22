# learn
Learn about webpack and integrated development
---

## 添加.gitignore
> 在项目根目录生成.gitignore文件  
> 针对node_modules,dist,.vscode等  
> 在git提交时忽略以上文件或文件夹  
---

## 增加EditorConfig

> 在不同IDE之间定义和维护一致的代码风格  
> 官网： https://editorconfig.org/

## 增加stylelint检查
> 添加stylelint及插件  
> stylelint-order强制要求书写css按照一定的顺序

    npm install stylelint stylelint-order -D

> 配置stylelint规则  
> 这些配置文件都需要安装依赖，并在stylelint配置文件中引入

- stylelint-config-standard
- stylelint-config-idiomatic-order
- stylelint-config-recess-order

## 增加eslint检查
> 添加eslint

    npm install eslint -D
> 初始化eslint，生成.eslintrc.*文件

    npx eslint --init
> 按照提示信息生成.eslintrc.*文件，建议使用.yml格式的配置文件（看上去比较简洁-->高大上)
eslint官方规则： http://eslint.cn/docs/rules/
### npx的说明
> npx 想要解决的主要问题，就是调用项目内部安装的模块。  
> 基本使用请参考阮一峰老师教程：http://www.ruanyifeng.com/blog/2019/02/npx.html
---

## 增加commitlint检查

    npm install -D @commitlint/cli @commitlint/config-conventional

> 创建.commitlintrc.yml文件

    extends: ['@commitlint/config-conventional']
    

## 增加husky检查
> 添加husky检查

    npm install husky -D
> 修改package.json文件

    "husky": {
      "hooks": {
        "pre-commit": "npm run lint",
        "commit-msg": "commitlint -e $GIT_PARAMS"
      }
    }
> pre-commit后跟着 scripts里的脚本代码，这里对应lint检查

---

# Vue项目

## 入口文件main.js

注意：使用render来替换template参数，render函数参数h，可以理解为html渲染函数，传入根组件App

## 根组件App

标准.vue文件，集合template，script，style三大标签

## html模板文件

创建index.html，创建id=app的div跟踪标签

## 核心vue-loader和VueLoaderPlugin

> VueLoaderPlugin这个插件是必须的！  
> 它的职责是将你定义过的其它规则复制并应用到 .vue 文件里相应语言的块。  
> 例如，如果你有一条匹配 /\.js$/ 的规则，那么它会应用到 .vue 文件里的 \<script>块。

## 工程配置文件config/index.js

分为dev和build两个部分，在内部实现不同的参数以供webpack各环境的配置文件使用。

+ devtool此选项控制是否以及如何生成source map

---

## webpack构建流程
### 初始化
> 解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。
> 注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。
### 编译
> 从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。
> 在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。
### 输出
> 递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。
> 输出所有chunk到文件系统。

## webpack配置文件

创建build文件夹用于管理webpack配置文件

### webpack.base.conf.js

+ entry，定义入口文件位置

+ output，定义构建位置及文件名

+ resolve定义文件简写路径和可忽略的后缀

### webpack.dev.conf.js

+ mode设置为development，会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。

+ 单独设置了处理less文件的方式，后期考虑设置函数自动分辨并处理样式文件

+ 使用html-webpack-plugin提取js

+ 使用HotModuleReplacementPlugin开启HRM

+ 使用NamedModulesPlugin，在热加载时直接显示更新模块的文件名

### webpack.prod.conf.js

+ mode设置为production，会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。

+ 引入clean-webpack-plugin构建时先清除dist目录

+ 引入mini-css-extract-plugin用于webpack4，提取css文件

+ 引入OptimizeCSSPlugin用于优化压缩提取的css文件，配合mini-css-extract-plugin或extract-text-webpack-plugin（webpack4以下）使用

+ 使用[webpack.optimize.CommonsChunkPlugin](https://webpack.docschina.org/plugins/commons-chunk-plugin/)提取公共模块(webpack4以下)

+ 持久化储存使用webpack.HashedModuleIdsPlugin，根据模块相对路径生成的hash作为chunk id，这样可以保持短和稳定

+ webpack4新增optimization选项，设置splitChunks选项，chunks参数为all，即异步，公共模块都提取

+ 增加可视化资源分析工具webpack-bundle-analyzer

## webpack-dev-server

+ 使用webpack-dev-server启动dev的配置文件

---

## vue-router

使用异步按需加载

    const Hello = () => import('@/components/Hello)

控制台语法报错**Support for the experimental syntax 'dynamicImport' isn't currently enabled**
需安装babel-plugin-syntax-dynamic-import插件，并在webpack基础配置文件babel-loader配置options-plugins选项

IDE报语法检查错误，需安装babel-eslint，并修改.eslintrc.yml文件
    parserOptions:
        parser: babel-eslint


