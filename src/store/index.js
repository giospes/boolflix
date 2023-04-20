import { createStore } from 'vuex';
import axios from 'axios'; 



const store = createStore ({
    state:{
        baseUrl : 'https://api.themoviedb.org/3',
        endpoint : {
            searchMovies: '/search/movie',
            searchTv: '/search/tv',
            discoverMovies: '/discover/movie',
            discoverTv: '/discover/tv',
        },
        apikey : 'api_key=86bc7bbdf9e9aaef4f8f8205ae68e103',
        query: '',
        moviesFound: [],
        TvFound: []
    },
    mutations:{
        searchMovs(state){
            const url = state.baseUrl + state.endpoint.searchMovies
            console.log(url)
        }
    }

    
})

export default store;