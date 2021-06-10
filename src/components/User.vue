<template>
    <div class="d-flex justify-content-center mt-5">
        <div class="text-start">
            <h1> <strong>{{ loggedIn.name }}</strong> </h1>
                <p class="mb-1">Email: <strong>{{ loggedIn.email }}</strong></p>
                <p>Registered: <strong>{{ loggedIn.created_at | formatDate }}</strong></p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import store from '../store';

export default {
    name: 'user',

    // async beforeRouteEnter(to, from, next) {
    //     await store.dispatch('getLoggedIn');
    //     next();
    // },

    computed: {
        ...mapGetters(['loggedIn'])
    },

    filters: {
        formatDate(date) {
            const newDate = new Date(date);
            return newDate.toLocaleDateString('en-GB');
        }
    }
}
</script>

<style>

</style>