import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { deleteTodoAPI, retreiveAllTodosForUsernameAPI } from "./api/TodoApiService"
import { useAuth } from "./Security/AuthContext"

export default function ListTodosComponent(){

    const today = new Date()

    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate();
    
    const targetDate = new Date(today.getFullYear()+12 ,today.getMonth(), today.getDay())

    const [todos,setTodos] =useState([])
    const [message,setMessage] =useState()

    //Static todos object built for testing
    // const todos = [
    //             //    {id:1,description:'Learn AWS Cloud',done:false, targetDate: targetDate},
    //             //    {id:2,description:'Learn Full Stack Dev', done: false, targetDate:targetDate},
    //             //    {id:3,description:'Learn Data Science', done: false, targetDate:targetDate},
    //             //    {id:4,description:'Learn Machine Learning', done: false, targetDate:targetDate},
    //             //    {id:5,description:'Learn MC Assigments', done: false, targetDate:targetDate}

    //               ]

    useEffect(() => refreshTodos(),[])

    function refreshTodos(){
        retreiveAllTodosForUsernameAPI(username)
        .then(
            (response)=>{
            // console.log(response)
            setTodos(response.data)
            }
        )
        .catch((error)=>console.log(error))
        .finally(console.log('Cleaned Up!'))
    } 

    function deleteTodo(id){
        console.log('Deleted Todo '+id);
        deleteTodoAPI(username, id)
        .then(
            ()=>{
                //Display message
                setMessage(`Deleted Todo with id ${id} successfully !`)
                //Update todos List
                refreshTodos()
            }
        )
        .catch(

        )
    }

    function updateTodo(id){
        console.log('Updated Todo '+id);
        navigate(`/todo/${id}`)

    }

    return(
        <div className="container">
            <h1>Let's get to work !</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div >
                <table className='table'>
                    <thead>
                        <tr className='headerRow'>
                            
                            {/* <td>ID</td> */}
                            <th>Description</th>
                            <th>isDone?</th>
                            <th>Target Date</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo =>(
                            <tr key={todo.id}>
                                {/* <td>{todo.id}</td> */}
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td><button className="btn btn-warning"
                                             onClick={() => deleteTodo(todo.id)}>Delete Todo</button></td>
                                <td><button className="btn btn-success"
                                             onClick={() => updateTodo(todo.id)}>Update Todo</button></td>
                            </tr>
                            )
                        )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

