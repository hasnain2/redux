import axios from "axios"

const api = axios.create({
    baseURL: "https://www.instagram.com/it.x_yasir/?__a=1",
    headers: {
        "Content-Type": "application/json",
    },
})

api.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error.response)
)

export default api
