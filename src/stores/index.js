import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todoSlice";
import countSlice from "./features/countSlice";
import filterSlice from "./features/filterSlice";
const store = configureStore({
  reducer: {
    count: countSlice,
    todo: todoSlice,
    filter: filterSlice,
  },
});

export default store;
