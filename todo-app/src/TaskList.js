import { Link } from "react-router-dom";
import { useEffect, useReducer } from "react";

const TaskList = () => {

    const tt = JSON.parse(localStorage.getItem('tasks'))

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0)
    
    return (
        <div className="home">
            {tt.map((task, index) => {
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
                    </div>
                )
            })}
        </div>
    )
}

export default TaskList;