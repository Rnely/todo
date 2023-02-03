import { useEffect, useState } from "react"
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
        if(editState){
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
        if(taskEditing === 'true') {
            if(name === "" ) {
                setName(tasks[editInd].name)
        }
            if(desc === "" ) {
                setDesc(tasks[editInd].desc)
        }
            if(date === "" ) {
                setDate(tasks[editInd].date)
        }
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
        if(!createTask) {
            navigate('/')
        }
      };

    const updateTask = (e) => {
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
                <form onSubmit={updateTask}>
                    <h2>Edit a task</h2>
                    <label>Task name:</label>
                    <input
                        type="text"
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
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => navigate("/")}>Cancel</button>
                </form>   
 
            </div>
        )
    }

}

export default Create;