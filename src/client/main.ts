import Vue from 'vue'
import {default as App} from './App.vue'
import {AgGridVue} from "ag-grid-vue";

// AG GRID
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-dark.css";

import "@/client/styles/style-a.less"
import "@/client/styles/style-b.scss"
import { store } from "./store"

Vue.component('AgGridVue')

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})


declare let module: any
if( module.hot ){
  module.hot.accept()
}

