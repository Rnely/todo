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

    const [taskEditing, setTaskEditing] = useState("")
    const navigate = useNavigate();
    const [ name, setName] = useState('');
    const [ desc, setDesc] = useState('');
    const [ date, setDate] = useState('');

    useEffect(() => {
        const json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json);
      }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
          id: tasks.length + 1 ,
          name,
          desc,
          date
        };
        setTasks([...tasks, newTask])
      };

    return (
        <div className="create">
            <h2>Add a New Task</h2>
            <form onSubmit={addTask}>
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

export default Create;