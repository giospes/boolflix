<template>
    <section class="d-flex gap-4">
        <CardComponent v-for="movie in store.moviesFound" :movie="movie"></CardComponent>
    </section>
</template>

<script>
    import {store} from '../data/store';
    import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardSection',
        components: {
            CardComponent
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