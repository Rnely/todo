import { useEffect, useState } from "react"
import LocalStorage from "./LocalStorage"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks")
        if (savedTasks) {
            return JSON.parse(savedTasks)
        } else {
            return []
        }
    })

    const [createTask, setCreateTask] = useState(true)
    const [taskEditing, setTaskEditing] = useState(() => {
        const editState = localStorage.getItem("edit")
        if(editState === true){
            return(editState)
        } else {
            return(editState)
        }
    })

    const editInd = JSON.parse(localStorage.getItem('editIndex'))

    const navigate = useNavigate();
    const [ name, setName] = useState('');
    const [ desc, setDesc] = useState('');
    const [ date, setDate] = useState('');

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
        if(!createTask) {
            navigate('/')
        }
      }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
            name,
            desc,
            date
        };
        setTasks([...tasks, newTask])
        setCreateTask(false)
      };

    const updateTask2 = (e) => {
        e.preventDefault()
        tasks[editInd] = {name, desc, date}
        localStorage.setItem("tasks", JSON.stringify(tasks))
        setTaskEditing(false)
        if(taskEditing) {
            navigate('/')
        }

    }

    if(taskEditing === 'true') {
        return (
            <div className="create">
                <form name="edit" onSubmit={updateTask2}>
                    <h2>Edit a task</h2>
                    <label>Task name:</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={tasks[editInd].name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Task Description:</label>
                    <textarea 
                        defaultValue={tasks[editInd].desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <label>Date:</label>
                    <input 
                        type="date"
                        defaultValue={tasks[editInd].date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <button type="submit">Update</button>
                    <button onClick={() => navigate('/')}>Cancel</button>
                </form>
            </div>
        )
                        
    } else {
        return (
            <div className="create">
                <form onSubmit={addTask}>
                    <h2>Add a New Task</h2>
                    <label>Task Name:</label>
                    <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>Task Description:</label>
                    <textarea 
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <label>Date:</label>
                    <input 
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <button type="button" onClick={addTask}>Save</button>
                    <button type="button" onClick={() => navigate("/")}>Cancel</button>
                </form>   
 
            </div>
        )
    }

}

export default Create;