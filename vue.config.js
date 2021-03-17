const PreloadWebpackPlugin = require('preload-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  outputDir: 'mobile-dist',
  assetsDir: 'static',
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: true,
  productionSourceMap: false,

  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = 'Wholesale Sex Toys | China professional sex toys manufacturer'
      return args
    })

    config.plugins.delete('prefetch')
    config.plugin('PreloadWebpackPlugin').use(PreloadWebpackPlugin)
    config.plugin('CompressionPlugin').use(CompressionPlugin)

    config.module
      .rule('eslint-loader')
      .test(/\.(js|vue)$/)
      .pre()
      .exclude.add(/node_modules/)
      .end()
      .use('eslint-loader')
      .loader('eslint-loader')

    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('vue-i18n-loader')
      .loader('@kazupon/vue-i18n-loader')
      .end()
  },

  devServer: {
    open: true,
    host: '0.0.0.0',
    // https: true,
    hotOnly: false,

    proxy: {
      '/api': {
        // target: 'http://124.71.104.20:30000', // sit
        // target: 'https://spw-sit-01.forms-syntron.co.th:3003/api', // sit
        // target: 'https://api.adultlovetoys.net/lovetoys-api', // uat2
        target: 'http://ec2-3-19-38-140.us-east-2.compute.amazonaws.com/lovetoys-api/', // uat2
        // target: 'https://spw-uat-02-ecpay.forms-syntron.co.th:3333/api', // uat2
        ws: true,
        changeOrigin: true,
        logLevel: process.env.NODE_ENV !== 'production' && 'debug',
        pathRewrite: {
          '^/api': '',
        },
      },
      '/download': {
        // target: 'http://172.21.67.197:11884', // sit
        // target: 'https://spw-sit-01.forms-syntron.co.th:3003/', // sit
        target: 'http://', // uat2
        // target: 'https://spw-uat-02-ecpay.forms-syntron.co.th:3333/', // uat2
        ws: true,
        logLevel: process.env.NODE_ENV !== 'production' && 'debug',
        changeOrigin: true,
        pathRewrite: {
          '^/download': '/download',
        },
      },
    },
  },
  parallel: require('os').cpus().length > 1,

  pluginOptions: {},
}
