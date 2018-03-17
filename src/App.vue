<template>
  <div>
    <div class="white-font black-background heading">Test of Poi, Vue, Typescript, Less, Scss, Ag Grid</div>
    <FilterExample></FilterExample>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'
  import FilterExample from './FilterExample.vue'

  @Component({
    components: {FilterExample}
  })
  export default class App extends Vue{
  }
</script>


<style scoped
       lang="less">

  .heading{
    padding: 5px;
  }

</style>
