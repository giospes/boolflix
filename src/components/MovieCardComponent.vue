<template>
    <div class="gs-card">
        <div class="front">
            <img :src="imgMov" class="w-100 h-100 object-fit-cover">
        </div>
        <div class="back">
            <span>title: <h6 class="d-inline-block">{{ movie.title }}</h6></span>
            <span>Original Title: <h6 class="d-inline-block"> {{ movie.original_title }}</h6></span>
            <span>Language: <img :src="imgLangSource" class="lang" alt="">  {{ movie.original_language }}</span>
            <span class="d-block">Rating: <fa :icon="['fas', 'star']" v-for="i in ratingConverted" /></span>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
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
            imgLangSource(){
                return `./img/flags/${this.movie.original_language}.png`
            },
            imgMov(){
                return `${store.imgBaseUrl}/w342${this.movie.poster_path}`
            },
            ratingConverted(){
                return Math.round(this.movie.vote_average/2)
            }
        },
        methods: {
            
        },
        mounted(){
           
        }
    }
</script>

<style lang="scss" scoped>
    .gs-card{
        width: 200px;
        height: 250px;
        overflow: hidden;
        .lang{
            width: 22px;
            height: 15px;
        }


        .back{
            display: none;
        }
    }

    .gs-card:hover{
        .front{
            display: none;
        }
        .back{
            display: block;
        }
    }
</style>