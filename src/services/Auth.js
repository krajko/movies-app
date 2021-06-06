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

    logout() {
        Http.defaults.headers.common['Authorization'] = '';
        localStorage.removeItem('token');
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