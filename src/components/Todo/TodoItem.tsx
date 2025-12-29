import React from "react";
import Task from "../../types/Task";


interface TodoItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({task, onToggle,onDelete}) => {

    return (
        <>
            <div className="task-item" aria-label="Todo list item
            ">
                 <span className={`task-text ${!task.completed ? "active": 'completed'}`}>{task.description}</span>
                 
                <div className="checkbox-wrapper">
    <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => onToggle(task.id)}
        id={`check-${task.id}`}
        className="visually-hidden" 
    />
    <label htmlFor={`check-${task.id}`} className="custom-checkbox">
        {task.completed && <img src="/assets/icon-check.svg" alt="tick" />}
    </label>
</div>

               
                <button className="delete-task-btn"
                onClick={ () => onDelete(task.id)}>
                    <img src="/assets/icon-cross.svg" alt="cross" />
                </button>
            </div>
            
        </>
    )

}

export default TodoItem;


