import { configureStore } from "@reduxjs/toolkit";
import categotyReducer from './category/categorySlice.js'


export const store = configureStore({
  reducer: {
    category: categotyReducer,
  },
})