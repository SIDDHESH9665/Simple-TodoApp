import { useState } from "react";
export const TodoForm = ({onAddTodo}) => {

    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (value) => {
        setInputValue({id:value, content:value, checked:false});
      };

    const handleFormSubmit = (event)=>{
        event.preventDefault();
          onAddTodo(inputValue);
          setInputValue({id:"", content:"", checked:false});

    }  

    return (
        <>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    placeholder="Enter a task"
                    type="text"
                    className="todo-input"
                    autoComplete="off"
                    value={inputValue.content}
                    onChange={(event) => handleInputChange(event.target.value)}
                />
                <button type="submit" className="todo-btn">
                    Add Task
                </button>
            </form>
        </>
    )
};