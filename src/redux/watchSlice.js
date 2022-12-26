import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  login: [],
  user: null,
  myList: [],
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
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    myList: (state, action) => {
      state.myList = action.payload;
    },
  },
});

export const { pageUp, pageDown, login, logout, myList } = counterSlice.actions;

export default counterSlice.reducer;
