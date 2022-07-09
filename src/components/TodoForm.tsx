import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../features/todoSlice';

import { Button, Input } from '@chakra-ui/react';

import './TodoForm.css';

export default function TodoForm() {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  function handleChange(e : any) {
    setItem(e.target.value);
  }

  function handleSubmit(e : any) {
    e.preventDefault(); 
    if (item !== '') {
      dispatch(addTodo(item))
      setItem('');
    } 
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        id='text' 
        minH='40px'
        w='calc(25vw + 25vh)'
        h='fit-content'
        placeholder='Add Todo' 
        focusBorderColor='purple.500'
        border='1px'
        borderColor='#bbb'
        value={item}
        onChange={handleChange}
      />
      <Button
        ml={3}
        colorScheme='purple'
        variant='solid'
        size='md'
        onClick={handleSubmit}
      >Add</Button>
  </form>
  );
}