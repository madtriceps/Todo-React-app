import Axios from "axios";

const ApiClient=Axios.create(
    {
        baseURL:'http://localhost:8080',
        withCredentials: true,
    }
);

export const retreiveAllTodosForUsername
 = (username)=>{ return ApiClient.get(`/users/${username}/todos`)}

