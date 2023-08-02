import axios from "axios"

const axiosClassic = axios.create({
    baseURL: 'http://localhost:4000',
})

export default axiosClassic