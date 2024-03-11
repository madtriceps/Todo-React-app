import Axios from "axios";

// export default function retreiveHelloWorldBean(){
//     return Axios.get('http://localhost:8080/hello-world')
// }

//Creating an instance of axios so that we dont have to type the baseUrl agaia and again
const ApiClient=Axios.create(
    {
        baseURL:'http://localhost:8080',
        withCredentials: true,
    }
);

//Method 1: Making a function
export default function retreiveHelloWorldBean(){
    return ApiClient.get('/hello-world')
}

//Method 2:Making a lambda function (Another way to call API via Axios) 
export const retreiveHelloWorldPathVariable
 = (username)=>{ return ApiClient.get(`/hello-world/path-variable/${username}`)}

