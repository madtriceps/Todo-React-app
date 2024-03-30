import { useParams, useNavigate } from 'react-router-dom';
import { createTodoAPI, retrieveTodoAPI, updateTodoAPI } from './api/TodoApiService';
import { useAuth } from './Security/AuthContext';
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function TodoComponent() {
    const { id } = useParams();

    const [description, setDescription] = useState('');
    const [isDone, setIsDone] = useState();
    const [targetDate, setTargetDate] = useState('');

    const authContext = useAuth();
    const navigate = useNavigate();

    const username = authContext.username;

    useEffect(() => {
        retrieveTodos();
    }, [id]);

    function retrieveTodos() {
        //This cleary means tht if id is -1, it means we have clicked the addNewTodo button on the ListTodos page 
        if(id !=-1){
            retrieveTodoAPI(username, id)
                .then((response) => {
                    setDescription(response.data.description);
                    setTargetDate(response.data.targetDate);
                    setIsDone(response.data.isDone);
                    })
                .catch((error) => console.log(error));
        }
    }

    function onSubmit(values) {
        // values means the values entered by the user
        // console.log(values);
        const todo ={}
        todo.username = username
        todo.id = id
        todo.description = values.description
        todo.targetDate= values.targetDate
        todo.isDone = false
        console.log(todo)

        //This is a condition which decodeds wheteher hte upadate button has been clicked or the create new todo. We are passing id as -1 when we click the create todo button
        //In order to resuse the onSubmit code
        if(id==-1){
            createTodoAPI(username,id,todo)
            .then((response) => {
                console.log(response)
                navigate('/todos')
            })
            .catch((error) => console.log(error));
        }
        else{
            updateTodoAPI(username,id,todo)
            .then((response) => {
                console.log(response)
                navigate('/todos')
            })
            .catch((error) => console.log(error));
        }
    }

    function validate(values) {
        let errors = {};

        if (values.description.length < 5) {
            errors.description = "Enter at least 5 characters";
        }

        if (values.targetDate) {
            const currentDate = new Date();
            const targetDate = new Date(values.targetDate);

            if (targetDate < currentDate) {
                errors.targetDate = 'Target date cannot be in the past';
            }
        }
        //This else if loop would run when someone clicks add new todo and doesn't select any target date
        else if(values.targetDate == ''){
            errors.targetDate = 'Target date cannot be empty '
        }

        return errors;
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik
                    initialValues={{ description, targetDate, isDone }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                >
                    {(props) => (
                        <Form>
                            <ErrorMessage
                                name="description"
                                component="div"
                                className='alert alert-warning'
                            />
                            <ErrorMessage
                                name="targetDate"
                                component="div"
                                className='alert alert-warning'
                            />
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description" />
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate" />
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Is Done?</label>
                                <Field as="select" className="form-control" name="isDone">
                                    <option value={false}>False</option>
                                    <option value={true}>True</option>
                                </Field>

                                <button className='btn btn-success m-5' type="submit">Update</button>
                            </fieldset>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
