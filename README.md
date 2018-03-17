Test repo to figure out optimal use of these technologies:

- Poi  
- Typescript
- Vue
- Jest
- AgGrid
- Less and Scss


## Notes:

These are the magic incantations needed to go make Poi work for Vue, TS, Less, Scss, etc:

1) Needed to add a `vue.shim.d.ts` to the /src folder so that Typescript knows about Vue files
 
```ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

2) Needed to add the Vue template compiler to `poi.config.js`

```js
templateCompiler: true
```


3) Styles:

a) Needed to let typescript know about styles: `global.d.ts`

```ts
declare module '*.css'
declare module '*.less'
declare module '*.scss'
```

b) Needed to import less or scss file, using `@/`:

```ts
import “@/style/style-file.less”
import “@/style/style-file.scss”
```

4) Needed to add these to package.json


```shell
npm i \
 less \
 less-loader \
 node-sass \
 poi-preset-typescript \
 sass-loader \
 typescript \
 vue-property-decorator \
 -D 
```

5) `poi.config.js`

```js
module.exports = {
  entry: './src/index.ts',
  templateCompiler: true,
  presets: [
    require('poi-preset-typescript')(/* options */),
    require('poi-preset-bundle-report')(),
    require('poi-preset-webpackmonitor')()
  ]
}
```

6) Jest

TODO


