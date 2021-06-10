<template>
    <div>
        <b-form v-on:submit.prevent="submit" class="text-center mx-auto mt-5" style="max-width: 380px;">
            <b-input v-model="title" type="text" placeholder="Title"/>
            <b-input v-model="director" type="text" placeholder="Director"/>
            <b-input v-model="genre" class="col" type="text" placeholder="Genre"/>
            <div class="d-flex flex-row">
                <b-input v-model="releaseDate" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" class="col me-3" placeholder="Release date"/>
                <b-input v-model="duration" type="text" onfocus="(this.type='number')" onblur="(this.type='text')" class="col" placeholder="Duration"/>
            </div>
            <b-input v-model="imageUrl" type="text" placeholder="Image URL"/>

            <b-button @click="reset" variant="dark" type="button" class="m-2 px-4">Reset</b-button>
            <b-button variant="primary" type="submit" class="m-2 px-4">Submit</b-button>

            <ul v-if="this.errors" class="list-unstyled text-primary text-center mt-3">
                <li v-for="error in errors" :key="error">
                    <p v-for="msg in error" :key="msg" class="my-1">{{ msg }}</p>
                </li>
            </ul>
        </b-form>
    </div>
</template>

<script>
import store from '../store'

export default {
    name: 'add-movie',
    
    data() {
        return {
            title: null,
            director: null,
            genre: null,
            releaseDate: null,
            duration: null,
            imageUrl: null,

            defaultImg: 'https://blog.hubspot.com/hubfs/Sales_Blog/famous-movie-quotes.jpg',
            errors: []
        }
    },

    methods: {
        async submit() {
            try {
                await store.dispatch('addMovie', {
                    title: this.title,
                    director: this.director,
                    genre: this.genre,
                    releaseDate: this.releaseDate,
                    duration: this.duration,
                    imageUrl: this.imageUrl ?? this.defaultImg
                });
                this.$router.push('/movies');
            } catch(e) {
                this.errors = e.response.data.errors;
            }
        },

        reset() {
            this.title = null;
            this.director = null;
            this.genre = null;
            this.releaseDate = null;
            this.duration = null;
            this.imageUrl = null;
        }
    }
}
</script>

<style>

</style>