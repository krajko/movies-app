import HttpService from './Http';

class AuthService extends HttpService {

    async register(user) {
        const { data } = await this.http.post('/register', user);
        return { data };
    }

    async login(credentials) {
        const { data } = await this.http.post('/login', credentials);
        return data;
    }

    async getMyProfile() {
        const { data } = await this.http.get(`/me`);
        return data;
    }

    logout() {
        return this.http.post('/logout');
    }
}

const authService = new AuthService();
export default authService;