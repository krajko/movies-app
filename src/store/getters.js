export default {
    isLoading: state => state.isLoading,
    loggedIn: state => state.loggedIn,
    isAuth: state => !!state.token,
    movies: state => state.movies,
};