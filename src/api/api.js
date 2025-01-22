import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-aco-final.onrender.com'
});


export default api;