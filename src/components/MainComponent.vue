<template>
    <main>
        <SearchComponent></SearchComponent>
        <MoviesSection></MoviesSection>
        <TvSection></TvSection>
    </main>
</template>

<script>
    import {store} from '../data/store';
    import MoviesSection from './MoviesSection.vue';
    import TvSection from './TvSection.vue';
    import SearchComponent from './SearchComponent.vue';
    export default {
        name: 'MainComponent',
        components:{
            SearchComponent, MoviesSection, TvSection
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>