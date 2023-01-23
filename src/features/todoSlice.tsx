import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoFields {
  id: number;
  title: string;
  completed: boolean;
}

const initialState: TodoFields[] = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      return state.map((todo: TodoFields) => {
        return {
          ...todo,
          completed: todo.id === action.payload ? !todo.completed : todo.completed,
        }
      });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      return state.filter(
        (todo: TodoFields) => todo.id !== action.payload
      );
    },
    editTodo: (state, action: PayloadAction<TodoFields>) => {
      return state.map((todo: TodoFields) => {
        return {
          ...todo,
          title: todo.id === action.payload.id ? action.payload.title : todo.title,
        }
      });
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
