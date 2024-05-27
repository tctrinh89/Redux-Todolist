import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todolist",
  initialState: [
    { id: 1, name: "Yoga", priority: "Medium", completed: false },
    { id: 2, name: "Javascript", priority: "High", completed: true },
    { id: 3, name: "foolballs", priority: "Low", completed: false },
  ],

  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    addToggleCheckbox(state, action) {
      state.map((todo) =>
        todo.id === action.payload ? (todo.completed = !todo.completed) : todo
      );
      console.log(action);
    },
  },
});

export const { addTodo, addToggleCheckbox } = todoSlice.actions;
export default todoSlice.reducer;
