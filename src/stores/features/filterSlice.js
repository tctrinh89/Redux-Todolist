import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterText(state, action) {
      state.search = action.payload;
    },
    searchFilterRadio(state, action) {
      state.status = action.payload;
    },
    searchFilterPrioty(state, action) {
      state.priorities = action.payload;
    },
  },
});

export const { searchFilterText, searchFilterRadio, searchFilterPrioty } =
  filterSlice.actions;
export default filterSlice.reducer;
