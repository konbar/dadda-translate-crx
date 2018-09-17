const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base')
const DashboardPlugin = require('webpack-dashboard/plugin');
const ChromeExtensionReloader = require('webpack-chrome-extension-reloader')

const devConfig = merge(baseWebpackConfig, {
  mode: 'development',
  watch: true,
  plugins: [
    new ChromeExtensionReloader(),
    new DashboardPlugin()
  ]
})

module.exports = devConfig
