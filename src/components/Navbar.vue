<template>
  <div id="nav" class="bg-white py-3 px-2">

    <div class="d-flex flex-row justify-content-evenly align-items-end">

      <div class="col-1 col-sm-3 col-xl-2 text-primary mb-1">
        <h2 class="ubuntu m-0 p-0"><b-icon-film class="col"/><strong class="d-none d-sm-inline"> Movies</strong></h2>
      </div>

      <div v-if="isAuth" class="col col-sm-2 d-flex mb-1">
        <router-link to="/movies" class="col-5"> 
          <h5 class="m-0"><strong>All</strong></h5> 
        </router-link>
        <router-link to="/add" class="col-5"> 
          <h5 class="m-0"><strong>Add</strong></h5> 
        </router-link>
      </div>

      <div v-if="isAuth" class="col col-sm-3">
        <search-bar/>
      </div>

      <div v-if="isAuth" class="col col-sm-2 d-flex justify-content-around mb-1">
        <router-link :to="`/user`" class="d-flex justify-content-end my-auto">
          <b-icon-person-circle font-scale="1.25" class="ms-2 mb-1 me-3 me-sm-2"/> 
          <p class="d-none d-xl-block m-0">{{ username }}</p> 
        </router-link>

        <a @click="handleLogout" class="pointer">Logout</a>
      </div>

      <div v-if="!isAuth" class="col col-sm-2 d-flex mb-1">
        <router-link to="/login" class="p col m-0">Login</router-link>
        <router-link to="/register" class="p col m-0">Register</router-link>
      </div>
      
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import SearchBar from './SearchBar.vue'

export default {
    name: 'navbar',
    components: {
      'search-bar': SearchBar
    },

    methods: {
      ...mapActions(['logout']),

      async handleLogout() {
        await this.logout();
        this.$router.push('/login');
      }
    },

    computed: {
      ...mapGetters(['isAuth', 'loggedIn', 'movies']),

      username() {
        return this.loggedIn.name;
      },

      filteredMovies() {
        return this.movies.filter(m => m.title.toLowerCase().includes(this.query.toLowerCase()));
      }
    }
}
</script>