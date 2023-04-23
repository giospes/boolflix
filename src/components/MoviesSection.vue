<template>
    <section class="d-flex gap-4">
        <MovieCardComponent v-for="movie in store.moviesFound" :movie="movie"></MovieCardComponent>
    </section>
</template>

<script>
    import {store} from '../data/store';
    import MovieCardComponent from './MovieCardComponent.vue';
    export default {
        name: 'MoviesSection',
        components: {
            MovieCardComponent
        },
        data(){
            return{
                store
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    section{
        flex-wrap: wrap;
    }
</style>