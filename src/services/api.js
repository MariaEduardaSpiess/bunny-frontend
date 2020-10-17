import axios from 'axios';
const api = axios.create({
    baseURL : 'https://bunny-assignment-backend.herokuapp.com/'
});

export default api;