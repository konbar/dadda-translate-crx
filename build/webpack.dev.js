const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader')

const devConfig = merge(baseWebpackConfig, {
  mode: 'development',
  watch: true,
  plugins: [
    new ChromeExtensionReloader()
  ]
})

module.exports = devConfig
