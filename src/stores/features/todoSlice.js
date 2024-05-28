import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    status: "idge",
    todos: [],
  },

  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    addToggleCheckbox(state, action) {
      state.todos.map((todo) =>
        todo.id === action.payload ? (todo.completed = !todo.completed) : todo
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        console.log(state);
        state.todos = action.payload;
        state.status = "idge";
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.todos.map((todo) => {
          return todo.id === action.payload.id
            ? (todo.completed = !todo.completed)
            : todo;
        });
        // let currentTodo = state.todos.find(
        //   (todo) => todo.id === action.payload.id
        // );
        // currentTodo.completed = !currentTodo.completed;
      });
  },
});
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});
export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (newTodo) => {
    const res = await fetch("/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    });
    const data = await res.json();
    return data.todos;
  }
);
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async (updateTodo) => {
    const res = await fetch("/api/updateTodo", {
      method: "POST",
      body: JSON.stringify(updateTodo),
    });
    const data = await res.json();
    console.log(data.todos);

    return data.todos;
  }
);
// export function addTodos(todo) {
//   return function addTodosThunk(dispatch, getState) {
//     console.log(todo);
//     dispatch(addTodo(todo));
//     console.log(getState());
//   };
// }

export const { addTodo, addToggleCheckbox } = todoSlice.actions;
export default todoSlice.reducer;
