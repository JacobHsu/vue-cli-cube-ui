module.exports = {
  // 200ok publicPath: process.env.NODE_ENV === 'production' ? '/dist' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-cli-cube-ui' : '/',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
