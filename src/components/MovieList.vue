<template>
    <div>
        <b-form-input 
            v-model="query" 
            autocomplete="off" 
            class="col rounded-pill mx-auto mt-4 mb-3 px-3" 
            style="width: 300px"
            placeholder="Start typing to filter..."
        />

        <div class="d-flex flex-row flex-wrap justify-content-center">
            <p v-if="movies.length === 0 && query">No movie title matches the search term.</p>

            <movie-card 
                v-for="movie in filteredMovies" 
                :key="movie.id" 
                :movie="movie" 
                @click.native="navigate(movie.id)"
                class="pointer"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '../store';
import MovieCard from './MovieCard';

export default {
    name: 'movie-list',
    components: {
        'movie-card': MovieCard
    },
    
    data() {
        return {
            query: ''
        }
    },

    async beforeRouteEnter(to, from, next) {
        await store.dispatch('getMovies');
        next();
    },

    methods: {
        navigate(id) {
            this.$router.push(`/movies/${id}`);
            console.log('a');
        }
    },

    computed: {
        ...mapGetters(['movies']),

        filteredMovies() {
            return this.movies.filter(m => m.title.toLowerCase().includes(this.query.toLowerCase()));
        }
    }
}
</script>