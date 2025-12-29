import React, { useEffect, useState } from "react";
import Task from "../../types/Task";
import { v4 as uuidv4 } from "uuid";
import NewTodoForm from "./NewTodoForm";
import "../../styles/Main.css";
import TodoList from "./TodoList";
import Modal from "../UI/Modal";

interface isDarkModeProps {
  isDarkMode: boolean;
}

const getTaskFromStore = (): Task[] => {
  const storedTasks = localStorage.getItem("tasks");

  if (storedTasks) {
    return JSON.parse(storedTasks) as Task[];
  }

  return [];
};

const saveTasksToStore = (task: Task[]): void => {
  localStorage.setItem("tasks", JSON.stringify(task));
};

 export type filterType = "all" | "active" | "completed";

const TodoApp: React.FC<isDarkModeProps> = ({ isDarkMode }) => {

  const [tasks, setTask] = useState<Task[]>(getTaskFromStore);
  const [filter, setFilter] = useState<filterType>("all");

  const [searchTerm, setSearchTerm] = useState('');
  const[isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    saveTasksToStore(tasks);
  }, [tasks]);

  const addTask = (description: string): void => {
    const newTask: Task = {
      description: description,
      id: uuidv4(),
      completed: false,
    };
    setTask((prevTasks) => [newTask, ...prevTasks]);
  };

  const deleteTask = (idToDelete: string): void => {
    setTask((prevTasks) =>
      prevTasks.filter((tasks) => tasks.id !== idToDelete)
    );
  };

  const toggleTaskCompletion = (idToToggle: string): void => {
    setTask((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToToggle
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;

    return true;
  })
  .filter((task) => 
     task.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

const handleConfirmClear = () => {
  setTask(tasks.filter(t => !t.completed))
  setIsModalOpen(false)
}


  return (
    <>
      <main className="todo-app-main">
        <div className={`task-card-manager ${isDarkMode ? "dark" : "light"}`}>
          <NewTodoForm onAddTask={addTask} />
          <div className="task-list-manager">
              <div className="search-container">
                <input 
                type="text"
                 className="search-input"
                 placeholder="Search items"
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)} />
                 {searchTerm && (
                  <button
                  className="clear-search"
                  onClick={() => setSearchTerm('')}>x</button>
                 )}
              </div>
              {filteredTask.length ===0 ? (<p className="placeholder">
                No {filter} tasks found. {filter === 'completed' ? 'Keep grinding': 'Time to relax!'}
              </p>): (
                <TodoList
              task={filteredTask}
              onDelete={deleteTask}
              onToggle={toggleTaskCompletion}
              onReorder={setTask}
              filter={filter}
            />
              )}
            
            <div className="task-control-sec">
              <div className="items-left">
                {tasks.filter((task) => !task.completed).length} item left
              </div>

              <div className="clear-completed">
                <button
                  onClick={() => setIsModalOpen(true)}
                >
                  clear completed
                </button>
              </div>
            </div>
          </div><div className="task-filters">
                <button className={`"filter-tab active" ${filter === 'all' ? 'active':''} ` }  onClick={()=> {setFilter('all')}}  data-filter = 'all'>All</button>
                <button className={`"filter-tab" ${filter === 'active' ? 'active': ''} `} onClick={() => {setFilter('active')}} data-filter= 'active'>Active</button>
                <button className={`"filter-tab" ${filter === 'completed' ? 'active': ''} `} onClick={() => {setFilter('completed')}} data-filter= 'completed'>Completed</button>
            </div>
          
        </div>
         <Modal
         isOpen={isModalOpen}
         onClose={()=> setIsModalOpen(false)}
         onConfirm={handleConfirmClear}/>
      </main>
    </>
  );
};

export default TodoApp;
