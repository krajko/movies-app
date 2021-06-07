<template>
  <div>
      <b-form v-on:submit.prevent="register" class="text-center mx-auto mt-5" style="max-width: 320px;">
          <b-input v-model="user.name" type="text" placeholder="Name"/>
          <b-input v-model="user.email" type="text" placeholder="Email"/>
          <b-input v-model="user.password" type="password" placeholder="Password"/>
          <b-input v-model="user.password_confirmation" type="password" placeholder="Confirm password"/>

          <b-button variant="primary" class="m-2 px-3" type="submit">Register</b-button>

          <ul v-if="this.errors" class="list-unstyled text-primary text-center mt-3">
            <li v-for="error in errors" :key="error">
                <p v-for="msg in error" :key="msg" class="my-1">{{ msg }}</p>
            </li>
        </ul>
      </b-form>
  </div>
</template>

<script>
import Auth from '../services/Auth'

export default {
    name: 'register',

    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            },
            errors: ''
        }
    },

    methods: {
        async register() {
            try {
                await Auth.register(this.user);
                this.$router.push('/login');
            } catch(e) {
                this.errors = e.response.data.errors;
            }
        }
    }
}
</script>
