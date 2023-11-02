import axios from 'axios'

const arcaikaApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// interceptors


export default arcaikaApi