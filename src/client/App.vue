<template>
  <div>
    <div class="white-font black-background heading">Test of Poi, Vue, Typescript, Less, Scss</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component } from 'vue-property-decorator'

  @Component
  export default class App extends Vue{
  }
</script>


<style scoped
       lang="less">

  .heading{
    padding: 5px;
  }

</style>
