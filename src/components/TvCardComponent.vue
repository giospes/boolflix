<template>
    <div class="card">
        <span>name: <h6 class="d-inline-block">{{ tv.name }}</h6></span>
        <span>Original Name: <h6 class="d-inline-block"> {{ tv.original_name }}</h6></span>
        <span>Language: <img :src="ImgSource" alt="">  {{ tv.original_language }}</span>
        <span>Rating: {{ tv.vote_average }}</span>
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