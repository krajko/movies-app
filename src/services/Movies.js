import { Http } from './Http';

export default class Movies {
    async getAll(query = null) {
        if (query) {
            const { data } = await Http.get(`/movies?title=${query}`);

            return data;
        }
        
        const { data } = await Http.get(`/movies`);

        return data;
    }
    
    async get(id) {
        const { data } = await Http.get(`/movies/${id}`);

        return data;
    }
    
    async add(movie) {
        const { data } = await Http.post('/movies', movie);

        return data;
    }

    async edit(id) {
        const response = await Http.patch(`/movies/${id}`);

        return response;
    }

    async delete(id) {
        const response = await Http.delete(`/movies/${id}`);

        return response;
    }
}