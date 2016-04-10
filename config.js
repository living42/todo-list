// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    index: path.resolve(__dirname, 'index.html'),
    assetsRoot: path.resolve(__dirname),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/todo-list/',
    productionSourceMap: false
  },
  dev: {
    port: 8080,
    proxyTable: {}
  }
}
