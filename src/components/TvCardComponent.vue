<template>
    
    <div class="gs-card">
        <div class="front">
            <img :src="imgTv" class=" w-100 h-100 object-fit-cover">
        </div>
        <ul class="back">
            <li>Title: <h6 class="d-inline-block">{{ tv.name }}</h6></li>
            <li>Original Title: <h6 class="d-inline-block"> {{ tv.original_title }}</h6></li>
            <li>Language: <img :src="imgLangSource" alt="" class="lang">  {{ tv.original_language }}</li>
            <li class="d-block">Rating: <fa :icon="['fas', 'star']" v-for="i in ratingConverted" /></li>

        </ul>
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
            imgLangSource(){
                return `./img/flags/${this.tv.original_language}.png`
            },
            imgTv(){
                return `${store.imgBaseUrl}/w342${this.tv.poster_path}`
            },
            ratingConverted(){
                return Math.round(this.tv.vote_average/2)
            }
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>
    
     .gs-card{
        width: 200px;
        height: 250px;
        overflow: hidden;
        background-color: black;
        color: white;
        
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
            padding-top: 1rem;
            padding-right: .5rem;
            display: block;
        }
    }
</style>