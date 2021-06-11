<template>
    <div class="d-flex flex-row flex-wrap justify-content-center mt-4">
        <movie-card 
            v-for="movie in movies" 
            :key="movie.id" 
            :movie="movie" 
            @click.native="navigate(movie.id)"
            class="pointer"
        />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import MovieCard from './MovieCard';

export default {
    name: 'movie-list',
    components: {
        'movie-card': MovieCard
    },

    computed: {
        ...mapGetters(['movies']),
    },

    methods: {
        navigate(id) {
            this.$router.push(`/movies/${id}`);
        }
    }
}
</script>