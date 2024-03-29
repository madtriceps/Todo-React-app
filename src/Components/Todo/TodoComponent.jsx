import {useParams} from 'react-router-dom'
import { retrieveTodoAPI } from './api/TodoApiService'
import { useAuth } from './Security/AuthContext'
import { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'


export default function TodoComponent() {
    const {id} = useParams()

    const [description , setDescription] = useState('');

    const [isDone , setIsDone] = useState();

    const [targetDate , setTargetDate] = useState('');

    const authContext = useAuth()

    const username = authContext.username

    useEffect(
        () => retrieveTodos(),
        [id]
    )

    function retrieveTodos(){
        retrieveTodoAPI(username , id)
            .then( (response) => {
                setDescription(response.data.description)
                setTargetDate(response.data.targetDate)
                setIsDone(response.data.isDone)
            })
            .catch((error)    => console.log(error))
    }

    function onSubmit(values){
        console.log(values)

    }


    return(
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description , targetDate , isDone}}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                >
                {
                    (props) => (
                        <Form>
                            <fieldset  className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>

                            <fieldset  className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Is Done?</label>
                                <Field as="select" className="form-control" name="isDone">
                                    <option value={false}>False</option>
                                    <option value={true}>True</option>
                                </Field>

                                <button className='btn btn-success m-5' type="submit" >Update</button>
                            </fieldset>

                        </Form>    

                    )
                }

                </Formik>
            </div>
        </div>
    )
}
