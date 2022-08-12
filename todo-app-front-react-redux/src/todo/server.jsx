import axios from "axios";
export const api = axios.create({
    baseURL: 'https://todo-app-backend-nine.vercel.app/api'
})
 