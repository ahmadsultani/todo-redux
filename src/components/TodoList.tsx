import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import { List } from '@chakra-ui/react';

interface TodoState {
  todos: TodoFields[];
}

interface TodoFields {
  id: number;
  title: string;
  completed: boolean;
}

function TodoList() {
  const todos = useSelector((state : TodoState) => state.todos);
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