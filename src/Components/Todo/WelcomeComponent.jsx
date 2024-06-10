import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import retreiveHelloWorldBean from './api/HelloWorldApiService';
import { retreiveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './Security/AuthContext';

export default function WelcomeComponent() {
    const { username } = useParams();
    const authContext = useAuth();
    const [message, setMessage] = useState();

    function helloWorldAPI() {
        console.log('Calling Hello World API');
        retreiveHelloWorldBean()
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup done'));
    }

    function helloWorldPathVariable() {
        console.log('Calling Hello World Path Variable API');
        retreiveHelloWorldPathVariable(username, authContext.token)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup done'));
    }

    function successfulResponse(response) {
        setMessage(JSON.stringify(response.data)); // Convert object to string
        console.log(response);
    }

    function errorResponse(error) {
        console.log(error);
    }

    return (
        <div className="Welcome">
            <div>
                <h1>Welcome to my React App, {username}</h1>
                <h4>Click here to see todos</h4>
                <Link to='/todos'>My Todos</Link>
                <br />
                <button className='btn btn-success mx-5' onClick={helloWorldPathVariable}>Hello World Path Variable API</button>
                <br />
                <button className='btn btn-success mx-5' onClick={helloWorldAPI}>Hello World API</button>
                <div className='text-info'>{message}</div>
            </div>
        </div>
    );
}
