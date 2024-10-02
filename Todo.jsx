import { useState } from "react";
import { FaListCheck } from "react-icons/fa6";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoData } from "./TodoData";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoLocalStorage";
import "./Todo.css";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageTodoData());

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };

  const handleDeleteAll = () => {
    setTask([]);
  };

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;

    const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
    if (ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, { id: id, content: content, checked: checked }]);
  };

  // Add data to local storage
  setLocalStorageTodoData(task);

  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section>
      <div className="todo-container">
        <header>
          <h1>
           <div className="header-logo"> <FaListCheck /> </div>
            Todo List
          </h1>
          <TodoData />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />
        <div className="task-list">
          <ul className="todo-list">
            {task.map((curTask) => (
              <TodoList
                checked={curTask.checked}
                key={curTask.id}
                data={curTask.content}
                onHandleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            ))}
          </ul>
        </div>
        <div>
          <button className="clear-btn" onClick={handleDeleteAll}>
            Clear All
          </button>
        </div>
      </div>
    </section>
  );
};
