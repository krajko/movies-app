<template>
  <div class="container-fluid p-0">
    <navbar></navbar>

    <div v-if="isLoading" class="text-center">
      <b-spinner variant="primary" class="mt-5"/>
    </div>
    <router-view v-else/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'navbar': Navbar
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

</style>
