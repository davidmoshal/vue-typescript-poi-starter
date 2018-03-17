const poi_preset_ts_forked = ({loaderOptions} = {}) => {

  return poi => {

    //console.log({poi})

    poi.extendWebpack(config => {

      config.resolve.extensions
        .add('.ts')
        .add('.tsx')

      config.module.rule('typescript')
        .test(/\.tsx?$/)
        .use('ts-loader')
        .loader('ts-loader')
        .options(
          Object.assign({
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true // used with ForkTsCheckerWebpackPlugin
            },
            loaderOptions
          ))

      config.module.rule('vue')
        .use('vue-loader')
        .tap(vueOptions => {
          vueOptions.esModule = true
          vueOptions.loaders.ts = [{
            loader: 'ts-loader',
            options: loaderOptions
          }]
          return vueOptions
        })

    })
  }
}


module.exports = options => {
  return ({
    entry: './src/index.ts',
    templateCompiler: true,
    presets: [
      poi_preset_ts_forked(),
      //require('poi-preset-typescript')(/* options */),
      require('poi-preset-bundle-report')(),
      require('poi-preset-webpackmonitor')()
    ],
    define: {
      IS_PRODUCTION: options.mode === 'production'
    }
  })
}


