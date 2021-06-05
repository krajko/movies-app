import Http from './Http';

class Auth {
    constructor() {
        this.setDefaultHeaders(localStorage.getItem('token'));
    }

    async login(user) {
        const response = await Http.post('/login', user);
        this.setDefaultHeaders(response.data.token);

        return response;
    }

    async logout() {
        return new Promise(resolve => {
            Http.defaults.headers.common['Authorization'] = '';
            localStorage.removeItem('token');

            resolve();
        });
    }

    async getUser(id) {
        const response = await Http.get(`/getUser/${id}`);

        return response;
    }

    setDefaultHeaders(token) {
        if (!token) {
            return;
        }

        localStorage.setItem('token', token);
        Http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

export default new Auth();