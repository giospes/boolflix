<template>
  <HeaderComponent></HeaderComponent>
  <MainComponent></MainComponent> 
  
</template>

<script>
  import {store} from './data/store';
  import axios from 'axios';
  import HeaderComponent from './components/HeaderComponent.vue';
  import MainComponent from './components/MainComponent.vue';


  

  export default {
    name: 'App',
    components:{
      HeaderComponent, MainComponent
    },
    data(){
      return{
        store
      }
    }, 
    computed:{
      
    },
    mounted(){
      
    }
  }
</script>

<style lang="scss" scoped>

</style>