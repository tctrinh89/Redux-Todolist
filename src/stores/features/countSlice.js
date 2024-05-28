import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
    number: 2,
  },
  reducers: {
    increaseCount: (state) => {
      state.value += 1;
    },
    decreaseCount: (state) => {
      state.value -= 1;
    },
    addNumber: (state, action) => {
      state.number = action.payload;
    },
    increasrCoundByNumber(state, action) {
      state.value += Number(action.payload);
    },
    decreasrCoundByNumber(state, action) {
      state.value -= Number(action.payload);
    },
  },
});

export const {
  increaseCount,
  decreaseCount,
  increasrCoundByNumber,
  decreasrCoundByNumber,
  addNumber,
} = countSlice.actions;
export default countSlice.reducer;
