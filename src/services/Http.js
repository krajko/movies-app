import axios from 'axios'

// const Http = axios.create({
//     baseURL: 'http://localhost:8000/api'
// });

// Http.interceptors.request.use(function (request) {
//     const token = localStorage.getItem('token');
//     console.log('request');

//     if (token) {
//         request.headers['Authorization'] = `Bearer ${token}`;
//     }

//     return request;
// });

// Http.interceptors.response.use(async function (response) {
//     const token = localStorage.getItem('token');
//     console.log('response');

//     if (token && response.status == 401) {
//         const { data } = await Http.post('/refresh-token');
//         localStorage.setItem('token', data.token);
//     }

//     return response
// });

class HttpService {
    constructor() {
        this.http = axios.create({
            baseURL: 'http://localhost:8000/api'
        });

        this.http.interceptors.request.use(function(request) {
            const token = localStorage.getItem('token');

            if (token) {
                request.headers['Authorization'] = `Bearer ${token}`;
            }

            return request;
        });

        this.http.interceptors.response.use(async function(response) {
            const token = localStorage.getItem('token');

            if (token && response.status == 401) {
                const { data } = await this.http.post('/refresh-token');
                localStorage.setItem('token', data.token);
            }

            return response;
        });
    }
}

export default HttpService;