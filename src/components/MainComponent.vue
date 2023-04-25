<template>
    <main>
        <SearchComponent></SearchComponent>
        <CardSection></CardSection>
    </main>
</template>

<script>
    import {store} from '../data/store';
    import CardSection from './CardSection.vue';
    import SearchComponent from './SearchComponent.vue';
    export default {
        name: 'MainComponent',
        components:{
            SearchComponent, CardSection,
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    main{
        background-color: grey;
    }
</style>