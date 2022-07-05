import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import './TodoList.css';

function TodoList() {
  const todos = useSelector((state : any) => state.todos)
  
  return (
    <ul className="TodoList">
      {todos.map((todo : any) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
      ))}
    </ul>
  )
}

export default TodoList;