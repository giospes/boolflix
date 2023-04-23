<template>
    <section class="d-flex gap-4">
        <TvCardComponent v-for="tv in store.TvFound" :tv="tv"></TvCardComponent>
    </section>
</template>

<script>
    import {store} from '../data/store';
    import TvCardComponent from './TvCardComponent.vue';
    export default {
        name: 'TvSection',
        components: {
            TvCardComponent
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