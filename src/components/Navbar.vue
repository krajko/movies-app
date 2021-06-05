<template>
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
</template>

<script>
export default {
    name: 'navbar',

    data() {
        return {
        }
    }
}
</script>

<style>

</style>