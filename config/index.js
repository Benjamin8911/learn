const path = require('path')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    // Dev Server Settings
    host: 'localhost',
    port: 8080,
    autoOpenBrowser: false,
    useEslint: true,

    devtool: 'cheap-module-eval-source-map',

    cacheBusting: true,
    cssSourceMap: true
  },
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),
    
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    // Source Maps
    productionSourceMap: true,
    devtool: '#source-map',

    bundleAnalyzerReport: process.env.npm_config_report
  }
}