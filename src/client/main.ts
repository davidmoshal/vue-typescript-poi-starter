import Vue from 'vue'
import {default as App} from './App.vue'

import "@/client/styles/style-a.less"
import "@/client/styles/style-b.scss"
import { store } from "./store"

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


declare let module: any
if( module.hot ){
  module.hot.accept()
}

