
Purpose:

Test repo to figure out optimal use of these technologies:

- Poi V.10 (Webpack 4)
- Typescript
- Vue 2.5.16
- Jest
- Less and Scss

NB: For Poi v.9 (webpack 3) see the V.9 branch.


## Notes:

These are the magic incantations needed to go make Poi work for Vue, TS, Less, Scss, etc:

1) Needed to add a `vue.shim.d.ts` to the /src folder so that Typescript knows about Vue files
 
```ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

2) Styles:

- a) Needed to let typescript know about styles: `global.d.ts`

```ts
declare module '*.css'
declare module '*.less'
declare module '*.scss'
```

- b) Needed to import less or scss file, using `@/`:

```ts
import “@/style/style-file.less”
import “@/style/style-file.scss”
```

3) Needed to add these to package.json


```shell
npm i \
 less \
 less-loader \
 node-sass \
 typescript \
 vue-property-decorator \
 @poi/plugin-typescript \
 -D 
```

optional, but useful:

```shell
npm i \
  @poi/plugin-bundle-report  \
  @poi/plugin-webpackmonitor \
 -D
```

4) DefinePlugin equivalent

```ts
// poi.config.js

 define: {
    IS_PRODUCTION: options.mode === 'production'
 }

```

5) `poi.config.js`

   
```ts
module.exports = options => {

  console.log({options})

  return ({

    entry: options.entry || './src/index.ts',

    templateCompiler: true,

    plugins: [
      require('@poi/plugin-typescript')(/* options */),
      require('@poi/plugin-bundle-report')(),
      require('@poi/plugin-webpackmonitor')()
    ],
    
    define: {
      IS_PRODUCTION: options.mode === 'production'
    }

  })
}


```

6) Jest

TODO


