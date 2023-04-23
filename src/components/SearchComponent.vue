<template>
    <nav class="d-flex justify-content-center align-items-center">
        <ul class=" d-none d-sm-flex m-0">
            <li class="text-uppercase fs-5 px-3"><a href="">Home</a></li>
            <li class="text-uppercase fs-5 px-3"><a href="">Movies</a></li>
            <li class="text-uppercase fs-5 px-3"><a href="">TV Shows</a></li>
        </ul>
        <div id="search-container" class="ms-4">
            <input v-model="store.query" @keyup="store.searchMovies(), store.searchTv()" type="text">
            <button>Search</button>
        </div>
    </nav>
</template>

<script>
    import {store} from '../data/store';

    export default {
        name: 'SearchComponent',
        data(){
            return{
               store 
            }
        }
    }
</script>

<style lang="scss" scoped>
    nav{
        height: 60px;
        background-color: red;

        a{
            text-decoration: none;
        }
        
        #search-container{
            border-radius: 5px;
            overflow: hidden;
            input{
                border: none;
                width: 400px;
            }
            button{
                border: none;
            }
        }
    }
</style>