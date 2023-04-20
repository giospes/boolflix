<template>
    <div class="card">
        <span>title: <h6 class="d-inline-block">{{ movie.title }}</h6></span>
        <span>Original Title: <h6 class="d-inline-block"> {{ movie.original_title }}</h6></span>
        <span>Language: {{ movie.original_language }}</span>
        <span>Rating: {{ movie.vote_average }}</span>
    </div>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'CardComponent',
        props:{
            movie : Object
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        width: calc(100% / 7);
    }
</style>