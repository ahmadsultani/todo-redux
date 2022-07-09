import { createSlice } from '@reduxjs/toolkit';

const initialState : any = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state : any, action : any) => {
      const newTodo = { 
        id: Date.now(),
        title: action.payload,
        completed: false
      }
      state.push(newTodo);
    },
    toggleTodo: (state : any, action : any) => {
      const todo = state.find((todo : any) => todo.id === action.payload);
      todo.completed = !todo.completed
    },
    removeTodo: (state : any, action : any) => {
      return state.filter((todo : any) => todo.id !== action.payload);
    },
    editTodo: (state : any, action : any) => {
      const todo = state.find((todo : any) => todo.id === action.payload.id);
      todo.title = action.payload.title;
    }
  }
});

export const { addTodo, toggleTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;