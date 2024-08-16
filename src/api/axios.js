import axios from "axios";
import router from "@/router/index.js";

const process = import.meta.env;

const api = axios.create({
    baseURL: process.VITE_APP_BASE_URL,
    headers: {
        // 'Content-Type': 'application/json'
    }
})


api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');

        if (token)
            config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    error => {
        return Promise.reject(error);
    }
)

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            //задержка в три секунды для того чтобы пользователь увидел модалку
            setTimeout(() => router.push('/login'), 3000);
        }

        return Promise.reject(error);
    } 
)

export default api;