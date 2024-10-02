export const getLocalStorageTodoData =()=>{
    const rawTodos = localStorage.getItem(todoKey);
        if(!rawTodos) return[];
        return JSON.parse(rawTodos);
};

const todoKey = "reactTodo";

export const setLocalStorageTodoData =(task)=>{
    return localStorage.setItem(todoKey, JSON.stringify(task));
};