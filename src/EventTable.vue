<template>
    <div style="width: 900px;">
        <ag-grid-vue style="width: 100%; height: 350px;"
                     class="ag-dark"
                     :gridOptions="gridOptions"
                     :rowData="events">
        </ag-grid-vue>
    </div>
</template>

<script lang="ts">
    import { GridApi, GridOptions } from "ag-grid"
    import { AgGridVue } from "ag-grid-vue";
    import Vue from "vue";
    import { Component, Watch } from 'vue-property-decorator'
    import { State } from "vuex-class"

    @Component({
      components: {
        'ag-grid-vue': AgGridVue
      }
    })
    export default class EventTable extends Vue{

      @State events: Array<{ timestamp: string }>

      gridApi: GridApi         = null
      gridOptions: GridOptions = null

      beforeMount(){
        this.gridOptions = <GridOptions>{
          height     : 200,
          columnDefs : this.createColumnDefs(),
          onGridReady: ( params ) =>{
            this.gridApi = params.api
          }
        }
      }

      createColumnDefs(){
        return [
          {headerName: "Timestamps", field: "timestamp", width: 500},
        ];
      }

      @Watch('events')
      on_event( arr, old ){
        if( this.gridApi == null || this.events.length == 0 )
          return

        Vue.nextTick(() =>{
          this.gridApi.ensureIndexVisible(arr.length - 1)
        })
      }

     }
</script>

<style>
</style>