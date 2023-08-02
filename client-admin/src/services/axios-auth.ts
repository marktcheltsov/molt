import axiosClassic from "./axios-config"

interface ResponceToken {
    jwt: string
}

export const login = (email: string, password: string) => {
    return axiosClassic.post('/signin', { password, email })
}

export const register = (email: string, password: string) => {
    return axiosClassic.post('/signup', { email, password })
}