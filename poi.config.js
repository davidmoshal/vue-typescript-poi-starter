// for POI v.10 (webpack 4):

const DEVELOPMENT_PORT = 8080;

module.exports = options => {
  console.log({options});

  const is_development = options.mode === "development";
  console.log({is_development});

  // overrides to dist and homepage:
  let {outDir, publicPath} = options;

  const has_entry_file = (filename) =>
    options.entry && options.entry[0] && (options.entry[0].indexOf(filename) > -1)

  if (has_entry_file("x")) {
    outDir = "dist/x";
    publicPath = "/x/";
  } // etc.

  /////////////////// CONFIGURATION //////////////////////////

  return {
    outDir,
    publicPath,
    restartOnFileChanges: false,
    vue: {
      fullBuild: true // replaces templateCompiler: true,
    },
    port: DEVELOPMENT_PORT,
    html: {
      title: "poi-ts-vue-jest-example",
      // favicon: "./src/assets/images/favicon.ico" // TODO: consider favicons-webpack-plugin
    },
    plugins: [
      require('@poi/plugin-typescript')(/* options */),
      //require('@poi/plugin-bundle-report')(),
      //require('@poi/plugin-webpackmonitor')()
    ],
    define: {
      IS_PRODUCTION: options.mode === "production",
      BUILD_TIMESTAMP: JSON.stringify(new Date().toLocaleString())
    },
    sourceMap: is_development ?
      // DEVELOPMENT:
      "source-map" // for vscode chrome debugging
      //'cheap-module-eval-source-map'
      //'#eval-source-map'
      // PRODUCTION:
      // : "nosources-source-map";
      : "source-map"
  }
};
