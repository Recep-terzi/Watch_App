import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  login: [],
  user: null,
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
  },
});

export const { pageUp, pageDown, login, logout } = counterSlice.actions;

export default counterSlice.reducer;
