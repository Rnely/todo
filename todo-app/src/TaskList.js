import { Link } from "react-router-dom";

const TaskList = ({tasks, name}) => {

    const tt = JSON.parse(localStorage.getItem('tasks'))

    return (
        <div className="home">
            {tt.map((task, index) => {
                return (
                    <div className="task-preview" key={index}>
                        <h2>Task Name: {task.name}</h2>
                        <p>Description: {task.desc}</p>
                        <p>Date Created: {task.date}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default TaskList;