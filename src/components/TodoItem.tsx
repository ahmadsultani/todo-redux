import { useDispatch, useSelector } from "react-redux";

import TodoEdit from './TodoEdit';

import { toggleTodo, removeTodo } from "../features/todoSlice";

import { HStack, IconButton, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { FaEdit, FaCheck } from 'react-icons/fa';

import { TodoFields } from '../features/todoSlice';

interface TodoItemProps {
  index: number;
}

interface TodoState {
  todos: TodoFields[];
}

export default function TodoItem({ index } : TodoItemProps){
  const { isOpen, onOpen, onClose } = useDisclosure();

  const todo = useSelector((state : TodoState) => state.todos[index])
  const dispatch = useDispatch();

  function handleCompleted() {
    dispatch(toggleTodo(todo.id));
  }

  function handleRemove() {
    dispatch(removeTodo(todo.id));
  }

  function handleEdit() {
    onOpen();
  }

  return (
    <>
      <Flex 
      opacity={todo.completed? '0.4' : 1}
        w='calc(35vw + 35vh)'
        h='fit-content'
        direction='row'
        align='center'
        justify='space-between'
        p={2}
        borderWidth='1px'
        borderRadius='12px'
        borderColor='#ccc'
        m={3}
      >
        <IconButton
          aria-label='todo completed'
          colorScheme='purple'
          variant={todo.completed ? "solid" : "outline"}
          icon={todo.completed ? <FaCheck />: undefined}
          isRound={true}
          onClick={handleCompleted}
        />
        <Text 
          flex='0.9'
          overflow='hidden'
        >{todo.title}</Text>
        <HStack>
          <IconButton
            size='lg'
            colorScheme='purple'
            aria-label='Edit Todo'
            icon={<FaEdit />}
            isRound={true}
            onClick={handleEdit}
          />
          <IconButton 
            colorScheme='purple'
            size='lg'
            aria-label='Delete Todo'
            icon={<DeleteIcon />}
            isRound={true}
            onClick={handleRemove} 
          />
        </HStack>
      </Flex>
      <TodoEdit isOpen={isOpen} onClose={onClose} todo={todo} />
    </>
  );
}