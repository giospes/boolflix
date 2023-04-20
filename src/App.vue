<template>
  <!-- <HeaderComponent></HeaderComponent>
  <MainComponent></MainComponent> -->
  <h1>{{url}}</h1>
</template>

<script>
  import store from './store';
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
        
      }
    }, 
    computed:{
      url(){
        return store.state.baseUrl
      }
    },
    mounted(){
      store.commit('searchMovs')
    }
  }
</script>

<style lang="scss" scoped>

</style>