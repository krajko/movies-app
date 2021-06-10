<template>
    <div class="d-flex flex-row justify-content-center align-items-center mx-auto" style="max-width: 800px;">
        <div v-if="isLoading" class="mt-5">
            <b-spinner variant="primary" class="mt-5"/>
        </div>

        <div v-else class="d-flex flex-column flex-md-row align-items-between mt-5">
            <img class="col-10 col-md-6 border rounded mx-auto" :src="movie.imageUrl" alt="Movie post" style="height: 100%"> 

            <div class="col-10 col-md-6 d-flex flex-column justify-content-center mx-auto py-4 py-md-0 px-4" style="height: 100%">
                <div>
                    <h1 class="mt-0"> <strong>{{ movie.title }}</strong> </h1>
                    <hr class="mt-1 mb-4">
                </div>

                <div>
                    <p>Director: <strong> {{ movie.director }} </strong> </p>
                    <p>Genre: <strong> {{ movie.genre }} </strong> </p>
                    <p>Duration: <strong> {{ movie.duration }} minutes</strong> </p>
                    <p class="mb-0">Release date: <strong> {{ movie.releaseDate | formatDate }} </strong> </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Movies from '../services/Movies'

export default {
    name: 'movie',

    data() {
        return {
            isLoading: true,
            movie: {}
        }
    },

    beforeRouteEnter(to, from, next) {
        next(async vm => {
            try {
                vm.movie = await Movies.get(to.params.id);
            } catch(e) {
                console.log(e);
            } finally {
                vm.isLoading = false;
            }
        })
    },

    filters: {
        formatDate(date) {
            const newDate = new Date(date);
            return newDate.toLocaleDateString('en-GB');
        }
    }
}
</script>

<style scoped>

p {
    margin-bottom: .4rem;
}

</style>