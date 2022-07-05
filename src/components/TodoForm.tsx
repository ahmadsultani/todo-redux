import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './TodoForm.css';

import { addTodo } from '../features/todoSlice';

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
      <input type="text" placeholder='Add an item' value={item} onChange={handleChange} />
      <button className="btn" type='submit'>Add</button>
    </form>
  );
}