
import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NODE_ENV === "development"? "http://localhost:3000/api" : "https://your-production-api-url.com",
    timeout: 10000,
});