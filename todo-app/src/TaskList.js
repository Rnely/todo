import { useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import Create from "./Create";

const TaskList = () => {

    const tt = JSON.parse(localStorage.getItem('tasks'))

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

    const [ edit, setEdit] = useState(false)
    const [editIndex, setEditIndex] = useState('')
    
    const navigate = useNavigate()

    const [query, setQuery] = useState("")

    useEffect(() => {
        const json = JSON.stringify(edit);
        localStorage.setItem("edit", json);
        const json2 = JSON.stringify(editIndex);
        localStorage.setItem("editIndex", json2);
        if(localStorage.getItem("edit") === 'true') {
            navigate('/Create')
        }
    }, [edit]);
    
    return (
        <div className="home">
            <label>Search For a Task:</label>
            <input placeholder="Enter Task Name" onChange={event => setQuery(event.target.value)} />
            {
            tt.filter(tasks => {
                if(query === '') {
                    return tasks;
                } else if (tasks.name.toLowerCase().includes(query.toLowerCase())){
                    return tasks
                }
            }).map((task, index) => {
                return (
                    <div className="task-preview" key={index}>
                        <h2>Task Name: {task.name}</h2>
                        <p>Description: {task.desc}</p>
                        <p>Date Created: {task.date}</p>
                        <button onClick={() => {
                            tt.splice(index, 1)
                            localStorage.setItem('tasks',JSON.stringify(tt))
                            forceUpdate()
                        }}>Delete</button>
                        <button onClick={() => {
                            setEdit(true)
                            setEditIndex(index)
                            }}>Edit</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskList;