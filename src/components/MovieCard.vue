<template>
    <div class="card col-10 col-sm-8 col-md-5 col-lg-4 col-xl-3 text-start m-3 p-0">
        <img :src="movie.imageUrl" class="card-img-top" alt="Movie poster">

        <div class="card-body d-flex align-items-center pb-0">
            <h4 class="card-title"><strong>{{ movie.title }} ({{ movie.releaseDate | getYear }})</strong></h4> 
        </div>

        <div class="card-footer d-flex justify-content-between py-3">
            <small>{{ movie.director}}</small>
            <small>Genre: <span class="text-primary">{{ movie.genre }}</span></small>
        </div>                   
    </div>
</template>

<script>
export default {
    name: 'movie-list',

    props: {
        movie: Object
    },

    filters: {
        getYear(date) {
            const newDate = new Date(date);
            return newDate.getFullYear();
        }
    }
}
</script>