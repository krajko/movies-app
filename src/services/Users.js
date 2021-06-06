import Http from './Http'

class Users {
    async register(user) {
        const response = await Http.post('/register', user);

        return response;
    }
}

export default new Users();