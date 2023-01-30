import { useState } from "react"
import LocalStorage from "./LocalStorage"

const Create = () => {
    const [name, setName] = LocalStorage('name', '')
    const [desc, setDesc] = LocalStorage('desc', '')
    const [date, setDate] = LocalStorage('date', '')

    return (
        <div className="create">
            <h2>Add a New Task</h2>
            <form>
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
            </form>
        </div>
    )

}

export default Create;