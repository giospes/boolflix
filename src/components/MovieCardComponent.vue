<template>
    <div class="card">
        <span>title: <h6 class="d-inline-block">{{ movie.title }}</h6></span>
        <span>Original Title: <h6 class="d-inline-block"> {{ movie.original_title }}</h6></span>
        <span>Language: <img :src="ImgSource" alt="">  {{ movie.original_language }}</span>
        <span>Rating: {{ movie.vote_average }}</span>
    </div>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'MovieCardComponent',
        props:{
            movie : Object
        },
        data(){
            return{
                store,

            }
        },
        computed:{
            ImgSource(){
                return `./img/flags/${this.movie.original_language}.png`
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        width: calc(100% / 7);
        img{
            width: 22px;
            height: 15px;
            object-fit: cover;
        }
    }
</style>