module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        "common": '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        "./commen/stylus/mixin.styl",
        "./commen/stylus/icon.styl"
      ]
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        import: '~@/assets/styles/varibles.styl',
        globalVars: {
          primary_bg: '#f00'
        }
      }
    }
  }
}
