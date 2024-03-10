import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './Security/AuthContext'

export default function LoginComponent(){

    const [username, setUsername]=useState('Maddy')
    const [password, setPassword]=useState('')

    const[showErroMessage,setErrorMessage]=useState(false)

    const authContext = useAuth();

    const navigate =useNavigate();


    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    function handleSubmit(){
        if(authContext.login(username, password)){
            navigate(`/welcome/${username}`)
        }
        else{          
            setErrorMessage(true)
        }
    }


    return(
        <div className="Login">
            <h1>Time To Login !</h1>
            {showErroMessage && <div className='ErrorMessage'>Authentication Failed, please retry</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        
        </div>
    )



}