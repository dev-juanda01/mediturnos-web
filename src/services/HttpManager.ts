import axios from "axios";

export const HttpManager = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});
