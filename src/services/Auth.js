import Http from './Http';

class AuthService {
    constructor() {
        this.setDefaultHeaders(localStorage.getItem('token'));
        this.setDefaultHeaders(localStorage.getItem('name'));
    }

    async register(user) {
        const response = await Http.post('/register', user);

        return response;
    }

    async login(user) {
        const response = await Http.post('/login', user);
        this.setDefaultHeaders(response.data.token, response.data.name);
        
        return response;
    }

    async getUser() {
        const token = localStorage.getItem('token');
        const { data } = await Http.get(`/user/${token}`);

        return data;
    }
    
    logout() {
        Http.defaults.headers.common['Authorization'] = '';
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    
    setDefaultHeaders(token, name) {
        if (!token || !name) {
            return;
        }
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', name)
        Http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

const Auth = new AuthService();
export default Auth;