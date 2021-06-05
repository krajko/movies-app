<template>
  <div id="nav" class="bg-white d-flex flex-row justify-content-between align-items-end text-center border-bottom py-3">

      <div class="col col-sm-2 text-primary">
        <h2 class="m-0 p-0"><strong>Movies</strong></h2>
      </div>

      <div v-if="!isAuth" class="col col-sm-2 d-flex flex-row justify-content-start text-start">
        <router-link to="/login" class="p my-0 col">Login</router-link>
        <router-link to="/register" class="p my-0 col">Register</router-link>
      </div>

      <div v-if="isAuth" class="col col-sm-2 d-flex flex-row justify-content-center">
        <router-link to="/movies" class="col"> 
          <h5 class="my-0"><strong>All</strong></h5> 
        </router-link>
        <router-link to="/add" class="col"> 
          <h5 class="my-0"><strong>Add</strong></h5> 
        </router-link>
      </div>

      <div v-if="isAuth" class="col col-sm-2 d-flex flex-row justify-content-end text-end">
        <button @click="logout" to="/add" class="btn my-0 p-0 col-8">Logout</button>
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
        } else {
          this.isAuth = false;
        }
      }
    }
}
</script>