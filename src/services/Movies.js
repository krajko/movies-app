import Http from './Http';

class Movies {
    
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
        const response = await Http.post('/movies', movie);

        return response;
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

export default new Movies();