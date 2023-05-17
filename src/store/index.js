import { configureStore } from "@reduxjs/toolkit";
import categotyReducer from './category/categorySlice.js'
import productReducer from './product/productSlice.js'

export const store = configureStore({
  reducer: {
    category: categotyReducer,
    product: productReducer,
  },
})