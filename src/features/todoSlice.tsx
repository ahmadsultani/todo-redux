import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state : any, action : any) => {
      const newTodo = { 
        id: Date.now(),
        title: action.payload,
        completed: false
      }
      state.push(newTodo)
    },
    toggleTodo: (state : any, action : any) => {
      const todo = state.find((todo : any) => todo.id === action.payload)
      todo.completed = !todo.completed
    },
    removeTodo: (state : any, action : any) => {
      const index = state.findIndex((todo : any) => todo.id === action.payload)
      console.log(state[index])
      state.splice(index, 1)
    }
  }
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;