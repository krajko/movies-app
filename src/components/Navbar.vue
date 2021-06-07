<template>
  <div id="nav" class="bg-white d-flex flex-row justify-content-between align-items-end text-center py-3">

      <div class="col-3 col-sm-4 text-primary d-flex">
        <h2 class="col-7 m-0 ms-1 p-0"><strong>Movies</strong></h2>
      </div>

      <div v-if="!isAuth" class="col col-sm-2 d-flex">
        <router-link to="/login" class="p col m-0">Login</router-link>
        <router-link to="/register" class="p col m-0">Register</router-link>
      </div>

      <div v-if="isAuth" class="col col-sm-2 d-flex">
        <router-link to="/movies" class="col"> 
          <h5 class="m-0"><strong>All</strong></h5> 
        </router-link>
        <router-link to="/add" class="col"> 
          <h5 class="m-0"><strong>Add</strong></h5> 
        </router-link>
      </div>

      <div v-if="isAuth" class="col col-sm-4 d-flex align-items-end">
        <router-link :to="`/user`" class="col text-end"> {{ user }} </router-link>
        <button @click="logout" to="/add" class="btn col m-0 p-0">Logout</button>
      </div>

    </div>
</template>

<script>
import Auth from '../services/Auth'

export default {
    name: 'navbar',

    data() {
        return {
          isAuth: false
        }
    },

    methods: {
      logout() {
          Auth.logout();
          this.isAuth = false;
          this.$router.push('/login');
      }
    },
      
    watch: {
      $route() {
        if (localStorage.token) {
          this.isAuth = true;
          this.user = localStorage.getItem('user');
        } else {
          this.isAuth = false;
        }
      }
    }
}
</script>

<style scoped>

h2 {
  font-family: Ubuntu, sans-serif;
}

</style>