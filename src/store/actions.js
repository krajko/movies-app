import authService from '../services/Auth';
import movieService from '../services/Movies';

export default {
    async login(store, credentials) {
        const { user, token } = await authService.login(credentials);
        localStorage.setItem('token', token);

        store.commit('setLoggedIn', user);
        store.commit('setToken', token);
    },

    async logout(store) {
        await authService.logout();

        store.commit('setToken', null);
        store.commit('setLoggedIn', {});
        localStorage.removeItem('token');
    },

    async getLoggedIn(store) {
        if (store.getters.isAuth) {
            store.commit('setIsLoading', true);
            
            const loggedIn = await authService.getMyProfile();
            store.commit('setLoggedIn', loggedIn);

            store.commit('setIsLoading', false);
        } else {
            store.commit('setLoggedIn', {});
        }
    },

    async getMovies(store) {
        store.commit('setIsLoading', true);

        const movies = await movieService.getAll();
        store.commit('setMovies', movies);

        store.commit('setIsLoading', false);
    },

    async addMovie(store, movieData) {
        const movie = await movieService.add(movieData);
        store.commit('addMovie', movie);
    }

}