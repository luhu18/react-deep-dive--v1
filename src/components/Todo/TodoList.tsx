import React from "react";
import Task from "../../types/Task";
import TodoItem from "./TodoItem";
import { Reorder, AnimatePresence } from "framer-motion";
import { filterType } from "./TodoApp";

interface TodoListProps {
  task: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onReorder: (newOrder: Task[]) => void;
  filter: filterType;
}

const TodoList: React.FC<TodoListProps> = ({
  task,
  onToggle,
  onDelete,
  filter,
  onReorder,
}) => {
  return (
    <Reorder.Group
      as="ul"
      className="task-list"
      aria-label="Todo tasks container"
      axis="y"
      values={task}
      onReorder={onReorder}
      style={{ listStyle: "none", padding: 0 }}
    >
      <AnimatePresence mode="popLayout">
        {task.length === 0 ? (
          /* The placeholder is a div because it is the only child when empty */
          <div className="placholder" key="empty">
            <p>No {filter !== "all" ? filter : ""} tasks found!</p>
          </div>
        ) : (
          task.map((t) => (
            <Reorder.Item
              as="li"
              drag={filter === "all"}
              key={t.id}
              value={t}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2 }}
              style={{ listStyle: "none" }} /* Removes bullet points */
            >
              <TodoItem task={t} onDelete={onDelete} onToggle={onToggle} />
            </Reorder.Item>
          ))
        )}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export default TodoList;
