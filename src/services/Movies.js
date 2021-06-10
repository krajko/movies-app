import HttpService from './Http';

class MovieService extends HttpService{
    
    async getAll() {
        const { data } = await this.http.get(`/movies`);
        return data;
    }
    
    async get(id) {
        const { data } = await this.http.get(`/movies/${id}`);
        return data;
    }
    
    async add(movie) {
        const { data } = await this.http.post('/movies', movie);
        return data;
    }

    async edit(id) {
        const { data } = await this.http.patch(`/movies/${id}`);
        return data;
    }

    async delete(id) {
        const { data } = await this.http.delete(`/movies/${id}`);
        return data;
    }
}

const movieService = new MovieService();
export default movieService;