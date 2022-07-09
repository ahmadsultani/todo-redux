import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import { List } from '@chakra-ui/react';

function TodoList() {
  const todos = useSelector((state : any) => state.todos);
  let index : number = 0;
  
  return (
    <List>
      {todos.map((todo : any) => (
        <TodoItem key={todo.id} index={index++}/>
      ))}
    </List>
  )
}

export default TodoList;