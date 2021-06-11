<template>
    <div>
        <b-input
            v-model="query"
            autocomplete="off" 
            class="search rounded-pill px-3 m-0"
            placeholder="Search..."
            @focus="showResults = true"
        />
        <div v-if="showResults && query" class="result-box bg-white border rounded px-2 pt-3 mt-3">
            <div v-if="filteredMovies.length === 0" class="p-2 mb-2" style="width: 400px;">
                <span>No movie title with the term "{{ query }}" found.</span>
            </div>

            <ul v-else v-for="(movie, index) in filteredMovies" :key="movie.id" class="list-unstyled">
                <li @click="navigate(movie.id)" class="pointer m-0 d-flex flex-row justify-content-around align-items-center">
                    <img :src="movie.imageUrl" alt="Poster" class="col-3">

                    <div class="col-8">
                        <strong>{{ movie.title }} ({{ movie.releaseDate | getYear }})</strong> 

                        <div class="d-flex flex-row justify-content-between mt-1">
                            <small>{{ movie.genre }}</small>
                            <small>{{ movie.duration }}min</small>
                        </div>
                    </div>
                </li>
                <hr v-if="index !== filteredMovies.length - 1" class="mx-1">
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'search-bar',

    data() {
        return {
            query: '',
            showResults: false
        }
    },

    computed: {
        ...mapGetters(['movies']),
        
        filteredMovies() {
            return this.movies.filter(m => m.title.toLowerCase().includes(this.query.toLowerCase())).slice(0,5);
        }
    },

    methods: {
        navigate(id) {
            this.$router.push(`/movies/${id}`);
            this.showResults = false;
        }
    }
}
</script>

<style scoped>

li:hover {
    color: var(--bs-primary);
    transition: ease-in-out .3s;
}

.search {
    max-width: 400px;
}

.result-box {
    position: absolute;
    z-index: 1;
    max-width: 400px;
}

input {
    background-color: var(--bs-light);
}

input:focus {
    background-color: var(--bs-light);
}

</style>