import { useDispatch } from "react-redux";

import { toggleTodo, removeTodo } from "../features/todoSlice";

import './TodoItem.css';

export default function TodoItem({id, title, completed} : any){
  const dispatch = useDispatch();

  function handleCompleted() {
    dispatch(toggleTodo(id));
  }

  function handleRemove() {
    dispatch(removeTodo(id));
  }

  return (
    <li className={completed? "todo-completed" : ""}>
      <input className="todo-toggle" type="checkbox" checked={completed} onClick={handleCompleted} />
      <div className="todo-item">{title}</div>
      <button className="btn delete" onClick={handleRemove}>Delete</button>
    </li>
  );
}