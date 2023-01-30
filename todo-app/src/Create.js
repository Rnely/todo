import { useEffect, useState } from "react"
import LocalStorage from "./LocalStorage"

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

    useEffect(() => {
        const json = JSON.stringify(tasks);
        localStorage.setItem("tasks", json);
      }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        const newTask = {
          id: tasks.length + 1 ,
          name: e.target.name.value,
          desc: e.target.desc.value,
          date: e.target.date.value
        };
        setTasks([...tasks, newTask]);
        e.target.task.value = "";
      };

    return (
        <div className="create">
            <h2>Add a New Task</h2>
            <form onSubmit={addTask}>
                <label>Task Name:</label>
                <input 
                    type="text"
                    required
                    name="name"
                />
                <label>Task Description:</label>
                <textarea 
                    required
                    name="desc"
                />
                <label>Date:</label>
                <input 
                    type="date"
                    required
                    name="date"
                />
                <input type="Submit" />
            </form>
        </div>
    )
}

export default Create;