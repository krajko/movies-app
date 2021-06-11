<template>
  <div class="container-fluid p-0 h-100">
    <div v-if="isLoading" class="loading mx-auto ubuntu text-primary text-center">
      <h1><strong><b-icon-film/> Movies</strong></h1>
      <b-spinner variant="primary" class="my-3"/>
      <p>Please wait...</p>
    </div>

    <div v-else>
      <navbar></navbar>

      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { mapGetters } from 'vuex'
import store from './store'

export default {
  components: {
    'navbar': Navbar
  },

  async created() {
    store.commit('setIsLoading', true);

    try {
      await store.dispatch('getLoggedIn');
      await store.dispatch('getMovies');
    } catch {
      localStorage.removeItem('token');
      this.$router.push('login');
    }

    store.commit('setIsLoading', false);
  },

  computed: {
    ...mapGetters(['isLoading'])
  }
}
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

div {
  font-family: Helvetica, Avenir, sans-serif;
}

 #nav {
   box-shadow: 0 10px 15px rgba(1, 13, 34, 0.075);
 }
 
a {

  &.router-link-exact-active {
    color: var(--bs-primary);
  } 
}

.form-control {
    margin-bottom: 1rem;
}

.pointer:hover {
  cursor: pointer;
}

.ubuntu {
  font-family: Ubuntu, sans-serif;
}

.loading {
  margin-top: 20vh;
}

.loading h1 {
  font-size: 300%;
}

</style>
