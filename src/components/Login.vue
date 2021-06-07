<template>
  <div>
      <b-form v-on:submit.prevent="submit" class="text-center mx-auto mt-5" style="max-width: 280px;">
          <b-form-input v-model="credentials.email" type="email" placeholder="Email"/>
          <b-form-input v-model="credentials.password" type="password" placeholder="Password"/>

          <b-button variant="primary" type="submit" class="m-2 px-3">Login</b-button>

          <div v-if="error" class="list-unstyled text-primary text-center mt-3">
              <p class="my-1"> {{ error }} </p>
          </div>
      </b-form>
  </div>
</template>

<script>
import Auth from '../services/Auth'

export default {
  name: 'login',

  data() {
    return {
      credentials: {},
      error: ''
    }
  },

  methods: {
    async submit() {
      try {
        await Auth.login(this.credentials);
        this.$router.push('/');
      } catch(e) {
        if (e.response.status === 401) {
          this.error = "Invalid credentials.";
        } else {
          this.error = "Server error.";
        }
      }
    }
  }
}
</script>

<style>

</style>