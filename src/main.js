import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import './app.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

Vue.mixin({
  methods: {
    navigate(id) {
      this.$router.push(`/movies/${id}`);
    }
  },
  filters: {
    formatDate(date) {
      const newDate = new Date(date);
      return newDate.toLocaleDateString('en-GB');
    },

    getYear(date) {
      const newDate = new Date(date);
      return newDate.getFullYear();
    }
  }
})
  
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
