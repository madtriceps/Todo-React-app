import Axios from "axios";

const ApiClient=Axios.create(
    {
        baseURL:'http://localhost:8080',
        withCredentials: true,
    }
);

export const retreiveAllTodosForUsernameAPI
 = (username)=>{ return ApiClient.get(`/users/${username}/todos`)}

 export const deleteTodoAPI
 = (username , id)=>{ return ApiClient.delete(`/users/${username}/todos/${id}`)}

 export const retrieveTodoAPI
 = (username , id)=>{ return ApiClient.get(`/users/${username}/todos/${id}`)}

 export const updateTodoAPI
 = (username , id ,todo)=>{ return ApiClient.put(`/users/${username}/todos/${id}`,todo)}

 export const createTodoAPI
 = (username , id,todo)=>{ return ApiClient.post(`/users/${username}/todos`,todo)}