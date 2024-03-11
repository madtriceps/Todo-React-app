export default function ListTodosComponent(){

    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12 ,today.getMonth(), today.getDay())

    const todos = [{id:1,description:'Learn AWS Cloud',done:false, targetDate: targetDate},
                   {id:2,description:'Learn Full Stack Dev', done: false, targetDate:targetDate},
                   {id:3,description:'Learn Data Science', done: false, targetDate:targetDate},
                   {id:4,description:'Learn Machine Learning', done: false, targetDate:targetDate},
                   {id:5,description:'Learn MC Assigments', done: false, targetDate:targetDate}

                  ]
    return(
        <div className="container">
            <h1>Let's get to work !</h1>
            <div >
                <table className='table'>
                    <thead>
                        <tr className='headerRow'>
                            
                            <td>ID</td>
                            <td>Description</td>
                            <td>isDone?</td>
                            <td>Target Date</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo =>(
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toDateString()}</td>
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

