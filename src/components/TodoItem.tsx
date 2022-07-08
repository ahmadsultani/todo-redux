import { useDispatch, useSelector } from "react-redux";

import { toggleTodo, removeTodo } from "../features/todoSlice";

import './TodoItem.css';

export default function TodoItem({index} : any){
  const dispatch = useDispatch();

  const todo = useSelector((state : any) => state.todos[index])

  function handleCompleted() {
    dispatch(toggleTodo(todo.id));
  }

  function handleRemove() {
    dispatch(removeTodo(todo.id));
  }

  return (
    <li className={todo.completed? "todo-completed" : ""} key={todo.id}>
      <input className="todo-toggle" type="checkbox" checked={todo.completed} onChange={handleCompleted} />
      <div className="todo-item">{todo.title}</div>
      <button className="btn delete" onClick={handleRemove}>Delete</button>
    </li>
  );
}