import '../styles/todo.css'
import { useRef } from 'react';
const Todo = () => {
    let name = useRef(null)
    let description = useRef(null)


    let submit = (e) => {
        e.preventDefault()
        let data = {
            name: name.current.value,
            description: description.current.value,
        }
        fetch('http://localhost:4000/lists', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        name.current.value = '';
        description.current.value = ''
    }
    return (

        <div className="todo-list">
            <h1>My Todos</h1>
            <form action="" onSubmit={submit}>
                <div className="inputs">
                    <div className='name'>
                        <label For="name">Name:</label>
                        <input ref={name} type="text" placeholder='Enter Name' />
                    </div>
                    <div className="des">
                        <label For="Description">Description:</label>
                        <input ref={description} type="text" placeholder='Enter description' />
                    </div>
                    <div className="btn">
                        <button>Add Todo</button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default Todo;
