<template>
    <div>
        <div class="text-center mt-4">
            <b-spinner variant="primary" v-if="isLoading" class="mt-5"></b-spinner>
        </div>

        <div class="d-flex flex-row flex-wrap justify-content-center">

            <router-link :to="`/movies/${movie.id}`" v-for="movie in movies" :key="movie.id" class="card col-10 col-sm-8 col-md-5 col-lg-4 col-xl-3 text-start m-3 p-0">                    
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
import Movies from '../services/Movies';

export default {
    name: 'movie-list',
    
    data() {
        return {
            movies: [],
            isLoading: true
        }
    },

    created() {
        this.getAll();
    },

    methods: {
        async getAll() {
            try {
                this.movies = await Movies.getAll();
            } catch(e) {
                console.log(e);
            } finally {
                this.isLoading = false;
            }
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

<style>

</style>