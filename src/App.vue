<template>
  <HeaderComponent></HeaderComponent>
  <MainComponent></MainComponent>
</template>

<script>
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';
  

  export default {
    name: 'App',
    components:{
      HeaderComponent, MainComponent
    }
  }
</script>

<style lang="scss" scoped>

</style>