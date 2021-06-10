import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoading: false,
        movies: [],
        token: localStorage.getItem('token'),
        loggedIn: {}
    },
    actions,
    mutations,
    getters,
});

export default store;