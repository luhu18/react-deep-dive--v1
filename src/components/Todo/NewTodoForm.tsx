
import React, { useState } from "react";

interface NewTodoFormProps {
    onAddTask: (description: string) => void; 
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({onAddTask}) => {

     const [description, setDescription] = useState('')

     const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (description.trim() === '') {
            return
        }

        onAddTask(description.trim())

        setDescription('')
     };

     return (
        <>
        <form onSubmit={handleSubmit} className="task-form-card">
            <input 
            className="input-card"
            id="task"
            aria-label="task input"
            name="task"
            placeholder="Press Enter to save task"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </form>
        </>
     )
}


export default NewTodoForm;