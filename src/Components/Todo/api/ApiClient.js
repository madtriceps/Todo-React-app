import axios from "axios"

//Creating an instance of axios so that we dont have to type the baseUrl again and again
export const apiClient=axios.create(
    {
        baseURL:'http://localhost:8080'
    }
)