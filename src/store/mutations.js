export default {
    
    setIsLoading(state, payload) {
        state.isLoading = payload;
    },
    

    setLoggedIn(state, user) {
        state.loggedIn = user;
    },

    setToken(state, token) {
        state.token = token;
    },


    setMovies(state, movies) {
        state.movies = movies;
    },

    addMovie(state, movie) {
        state.movies.push(movie);
    },

}