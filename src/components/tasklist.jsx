import { useState } from "react";
import { useEffect } from "react";

import '../styles/tasklist.css'
const TaskList = () => {
    let [task, setTask] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:4000/lists')
            let data = await response.json()
            setTask(data)

        }
        fetchData()
    }, [task])
    let deleteTask = (id) => {
        fetch(`http://localhost:4000/lists/${id}`, { method: 'DELETE' })
    }

    return (
        <div className="task-list">
            {task.map((data) => (
                <ul>
                    <li className="task-details">
                        <h2>{data.name}:</h2>
                        <p> {data.description}</p>
                        <button onClick={() => deleteTask(data.id)}> Delete</button >
                    </li>
                </ul>
            ))}
        </div>
    );
}

export default TaskList;