import Http from './Http';

export default class Auth {
    constructor() {
        this.setDefaultHeaders(localStorage.getItem('token'));
    }

    async login(user) {
        const reponse = await Http.post('/login', user);
        this.setDefaultHeaders(response.data.token);

        return response;
    }

    async logout() {
        return new Promise(resolve => {
            baseService.defaults.headers.common['Authorization'] = '';
            localStorage.removeItem('token');

            resolve();
        });
    }

    async getUser(id) {
        const response = await baseService.get(`/getUser/${id}`);

        return response;
    }

    setDefaultHeaders(token) {
        if (!token) {
            return;
        }

        localStorage.setItem('token', token);
        baseService.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

export const Auth = new Auth();