import Vue from 'vue'
import {default as App} from './App.vue'
import {AgGridVue} from "ag-grid-vue";

// AG GRID
import "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-dark.css";

import "@/styles/style-a.less"
import "@/styles/style-b.scss"

Vue.component('AgGridVue')

new Vue({
  el: '#app',
  render: h => h(App)
})

