<template>
  <div class="container-fluid p-0">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    'navbar': Navbar
  }
}
</script>


<style lang="scss">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  /* font-family: Ubuntu; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

div {
  font-family: Helvetica, sans-serif;
}

 #nav {
   box-shadow: 0 10px 15px rgba(1, 13, 34, 0.075);
 }

h2 {
  font-family: Ubuntu, sans-serif;
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
