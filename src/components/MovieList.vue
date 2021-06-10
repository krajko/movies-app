<template>
    <div>
        <b-form-input v-model="query" autocomplete="off" class="col rounded-pill mx-auto mt-4 mb-3 px-3" placeholder="Start typing to filter..." style="width: 300px"/>

        <div class="d-flex flex-row flex-wrap justify-content-center">

            <p v-if="movies.length === 0 && query">No movie title matches the search term.</p>

            <router-link :to="`/movies/${movie.id}`" v-for="movie in filteredMovies" :key="movie.id" class="card col-10 col-sm-8 col-md-5 col-lg-4 col-xl-3 text-start m-3 p-0">                    
                <img :src="movie.imageUrl" class="card-img-top" alt="Movie poster">

                <div class="card-body d-flex align-items-center pb-0">
                    <h4 class="card-title"><strong>{{ movie.title }} ({{ movie.releaseDate | getYear }})</strong></h4> 
                </div>

                <div class="card-footer d-flex justify-content-between py-3">
                    <small>{{ movie.director}}</small>
                    <small>Genre: <span class="text-primary">{{ movie.genre }}</span></small>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '../store';

export default {
    name: 'movie-list',
    
    data() {
        return {
            query: ''
        }
    },

    async beforeRouteEnter(to, from, next) {
        await store.dispatch('getMovies');
        next();
    },

    computed: {
        ...mapGetters(['movies']),

        filteredMovies() {
            return this.movies.filter(m => m.title.toLowerCase().includes(this.query.toLowerCase()));
        }
    },

    filters: {
        getYear(date) {
            const newDate = new Date(date);
            return newDate.getFullYear();
        }
    }
}
</script>