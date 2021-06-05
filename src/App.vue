<template>
  <div class="container-fluid p-0">

    <div id="nav" class="bg-white d-flex flex-row justify-content-center align-items-end border-bottom py-3">

      <div class="col-3 d-flex flex-row justify-content-center text-end">
        <router-link to="/add" class="p my-0 col">Add</router-link>
        <router-link to="/movies" class="p my-0 col">All</router-link>
      </div>

      <div class="col-3 text-primary text-center">
        <h2 class="m-0 p-0"><strong>Movies</strong></h2>
      </div>

      <div class="col-3 d-flex flex-row justify-content-center text-start">
        <router-link to="/login" class="p my-0 col">Login</router-link>
        <router-link to="/register" class="p my-0 col">Register</router-link>
      </div>

    </div>
    
    <router-view/>
  </div>
</template>

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
  /* font-weight: bold; */
  /* color: black; */

  &.router-link-exact-active {
    color: var(--bs-primary);
  } 
}

</style>
