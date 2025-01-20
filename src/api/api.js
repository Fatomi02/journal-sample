import axios from "axios";

const api = axios.create({
    baseURL: 'https://api-aco-boss.onrender.com'
});


export default api;