import { configureStore } from "@reduxjs/toolkit";
import watchSlice from "./watchSlice";

export const store = configureStore({
  reducer: {
    watch: watchSlice,
  },
});
