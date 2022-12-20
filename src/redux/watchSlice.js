import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

export const counterSlice = createSlice({
  name: "watch",
  initialState,
  reducers: {
    pageUp: (state) => {
      state.page += 1;
    },
    pageDown: (state) => {
      state.page -= 1;
    },
  },
});

export const { pageUp, pageDown } = counterSlice.actions;

export default counterSlice.reducer;
