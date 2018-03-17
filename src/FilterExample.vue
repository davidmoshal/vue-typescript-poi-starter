<template>
    <div style="width: 900px;">
        <ag-grid-vue style="width: 100%; height: 350px;"
                     class="ag-dark"
                     :gridOptions="gridOptions">
        </ag-grid-vue>
    </div>
</template>

<script>
    import Vue from "vue";
    import {Component} from 'vue-property-decorator'
    import {AgGridVue} from "ag-grid-vue";

    @Component({
      components: {
        'ag-grid-vue': AgGridVue
      }
    })
    export default class FilterExample extends Vue {

      gridOptions = null

      text = null

      createRowData() {
        return [
          {"row": "Row 1", "name": "Michael Phelps"},
          {"row": "Row 2", "name": "Natalie Coughlin"},
          {"row": "Row 3", "name": "Aleksey Nemov"},
          {"row": "Row 4", "name": "Alicia Coutts"},
          {"row": "Row 5", "name": "Missy Franklin"},
          {"row": "Row 6", "name": "Ryan Lochte"},
          {"row": "Row 7", "name": "Allison Schmitt"},
          {"row": "Row 8", "name": "Natalie Coughlin"},
          {"row": "Row 9", "name": "Ian Thorpe"},
          {"row": "Row 10", "name": "Bob Mill"},
          {"row": "Row 11", "name": "Willy Walsh"},
          {"row": "Row 12", "name": "Sarah McCoy"},
          {"row": "Row 13", "name": "Jane Jack"},
          {"row": "Row 14", "name": "Tina Wills"}
        ];
      }

      createColumnDefs() {
        return [
          {headerName: "Row", field: "row", width: 450},
          {
            headerName: "Filter Component",
            field: "name",
            width: 430
          }
        ];
      }


      beforeMount() {
        this.gridOptions = {
          rowData: this.createRowData(),
          columnDefs: this.createColumnDefs(),
        }
      }
    }
</script>

<style>
</style>