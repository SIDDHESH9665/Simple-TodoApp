import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";


export const TodoList = ({data,checked, onHandleDeleteTodo,onHandleCheckedTodo }) => {
    return (
        <>
            <li className="todo-item">
                <span className={checked ? "check-list": "not-checked"}>{data}</span>
                <div className="task-actions">
                    <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}>
                        <FaCheck />
                    </button>
                    <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
                        <MdDeleteForever />
                    </button>
                </div>
            </li>
        </>
    );
};