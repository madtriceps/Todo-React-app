import { apiClient } from "./ApiClient"

export const retreiveAllTodosForUsernameAPI
 = (username)=>{ return apiClient.get(`/users/${username}/todos`)}

 export const deleteTodoAPI
 = (username , id)=>{ return apiClient.delete(`/users/${username}/todos/${id}`)}

 export const retrieveTodoAPI
 = (username , id)=>{ return apiClient.get(`/users/${username}/todos/${id}`)}

 export const updateTodoAPI
 = (username , id ,todo)=>{ return apiClient.put(`/users/${username}/todos/${id}`,todo)}

 export const createTodoAPI
 = (username , id,todo)=>{ return apiClient.post(`/users/${username}/todos`,todo)}