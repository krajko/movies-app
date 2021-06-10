<template>
  <div>
      <b-form v-on:submit.prevent="submit" class="text-center mx-auto mt-5" style="max-width: 280px;">
          <b-form-input v-model="credentials.email" type="email" placeholder="Email"/>
          <b-form-input v-model="credentials.password" type="password" placeholder="Password"/>

          <b-button variant="primary" type="submit" class="m-2 px-3">Login</b-button>

          <div v-if="failed" class="list-unstyled text-primary text-center mt-3">
              <p class="my-1"> Invalid credentials. </p>
          </div>
      </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'login',

  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      failed: false
    }
  },

  methods: {
    ...mapActions(['login']),

    async submit() {
      try {
        await this.login(this.credentials);
        this.$router.push('/');
      } catch {
        this.failed = true;
      }
    }
  }
}
</script>