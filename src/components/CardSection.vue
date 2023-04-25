<template>
    <div v-if="store.loaded == 2">
        <section class="container d-flex gap-3 flex-wrap py-5">
            <MovieCardComponent v-for="movie in store.moviesFound" :movie="movie"></MovieCardComponent>
        </section>
        <section class="container d-flex gap-3 flex-wrap py-5">
            <TvCardComponent v-for="tv in store.TvFound" :tv="tv"></TvCardComponent>
        </section>
    </div>
    <div v-else-if="store.loaded==1">
        <h1>Hold On...</h1>
    </div>
</template>

<script>
    import {store} from '../data/store';
    import MovieCardComponent from './MovieCardComponent.vue';
    import TvCardComponent from './TvCardComponent.vue';
    export default {
        name: 'MoviesSection',
        components: {
            MovieCardComponent, TvCardComponent
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