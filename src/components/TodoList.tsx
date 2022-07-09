import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import './TodoList.css';

function TodoList() {
  const todos = useSelector((state : any) => state.todos);
  let index : number = 0;
  
  return (
    <ul className="TodoList">
      {todos.map((todo : any) => (
        <TodoItem key={todo.id} index={index++}/>
      ))}
    </ul>
  )
}

export default TodoList;