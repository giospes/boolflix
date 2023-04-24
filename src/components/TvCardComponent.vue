<template>
    
    <div class="card">
        <div class="front">
            <img :src="imgTv" class=" w-100 h-100 object-fit-cover">
        </div>
        <div class="back">
            <span>title: <h6 class="d-inline-block">{{ movie.title }}</h6></span>
            <span>Original Title: <h6 class="d-inline-block"> {{ movie.original_title }}</h6></span>
            <span>Language: <img :src="imgLangSource" alt="" class="lang">  {{ movie.original_language }}</span>
            <span class="d-block">Rating: <fa :icon="['fas', 'star']" v-for="i in ratingConverted" /></span>

        </div>
    </div>
</template>

<script>
    import {store} from '../data/store';
    export default {
        name: 'TvCardComponent',
        props:{
            tv : Object
        },
        data(){
            return{
                store,

            }
        },
        computed:{
            ImgSource(){
                return `./img/flags/${this.tv.original_language}.png`
            },
            imgTv(){
                return `${store.imgBaseUrl}/w342${this.movie.poster_path}`
            },
            ratingConverted(){
                return Math.round(this.movie.vote_average/2)
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        width: calc(100% / 7);
        height: 250px;
        img.lang{
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