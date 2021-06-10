<template>
  <div id="nav" class="bg-white d-flex flex-row justify-content-around align-items-end py-3">

      <div class="col-4 d-flex text-primary">
        <h2 class="m-0 ms-1 p-0"><strong><b-icon-film/> Movies</strong></h2>
      </div>

      <div v-if="!isAuth" class="col col-sm-2 d-flex">
        <router-link to="/login" class="p col m-0">Login</router-link>
        <router-link to="/register" class="p col m-0">Register</router-link>
      </div>

      <div v-if="isAuth" class="col col-sm-2 d-flex justify-content-center align-items-end text-center">
        <router-link to="/movies" class="col"> 
          <h5 class="m-0"><strong>All</strong></h5> 
        </router-link>
        <router-link to="/add" class="col"> 
          <h5 class="m-0"><strong>Add</strong></h5> 
        </router-link>
      </div>

      <div v-if="isAuth" class="col col-sm-4 d-flex justify-content-end">
        <router-link :to="`/user`" class="d-flex justify-content-end my-auto">
          <b-icon-person-circle font-scale="1.25" class="ms-2 mb-1 me-3 me-sm-2"/> 
          <p class="d-none d-xl-block m-0">{{ username }}</p> 
        </router-link>
        <a @click="handleLogout" class="pointer ms-5">Logout</a>
      </div>

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import store from '../store';

export default {
    name: 'navbar',

    methods: {
      ...mapActions(['logout']),

      async handleLogout() {
        await this.logout();
        this.$router.push('/login');
      }
    },

    async created() {
      await store.dispatch('getLoggedIn');
    },

    computed: {
      ...mapGetters(['isAuth', 'loggedIn']),

      username() {
        return this.loggedIn.name;
      }
    }
}
</script>

<style scoped>

h2 {
  font-family: Ubuntu, sans-serif;
}

</style>