
import { apiClient } from "./ApiClient"

// export default function retreiveHelloWorldBean(){
//     return Axios.get('http://localhost:8080/hello-world')
// }


//Creating an instance of axios so that we dont have to type the baseUrl agaia and again
// const apiClient=Axios.create(
//     {
//         baseURL:'http://localhost:8080',
//         withCredentials: true,
//     }
// )

//The above apiClient has been shifted to a separate module of its own to configure adding the authorization header and centralize the calling of apiClient, plus it also got repetitive in all ApiServices.

//Method 1: Making a function
export default function retreiveHelloWorldBean(){
    return apiClient.get('/hello-world')
}

//Method 2:Making a lambda function (Another way to call API via Axios) 
export const retreiveHelloWorldPathVariable
 = (username,token)=>{ return apiClient.get(`/hello-world/path-variable/${username}`,{
    headers:{
        Authorization:token
    }
 })}

 




