import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-aco-up.onrender.com'
});


export default api;