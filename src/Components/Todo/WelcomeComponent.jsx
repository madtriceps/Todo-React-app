import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

export default function WelcomeComponent(){
    const {username} = useParams()
    
    const [message, setMessage]= useState();

    function helloWorldAPI(){
        console.log('Calling Hello World API')
        axios.get('http://localhost:8080/hello-world')
            .then( (response)=> successfulResponse(response))
            .catch( (error) => errorResponse(error))
            .finally(console.log('cleanup')) 
    }   

    function successfulResponse(response){
        setMessage(response.data)
        console.log(response)
    }
    
    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="Welcome">
            <div>
                <h1> Welcome to my React App,{username} </h1>
                <h4>Click here to see todos</h4>
                <Link to='/todos'>My Todos</Link>
                <button className='btn btn-success mx-5' onClick={helloWorldAPI}>Hello World API</button>
                <div className='text-info'>{message}</div>
            </div>
        </div>
    )
}