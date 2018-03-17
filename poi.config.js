module.exports = {
  entry: './src/index.ts',
  templateCompiler: true,
  presets: [
    require('poi-preset-typescript')(/* options */),
    require('poi-preset-bundle-report')(),
    require('poi-preset-webpackmonitor')()
  ]
}