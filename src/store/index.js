import { configureStore } from "@reduxjs/toolkit";
import categotyReducer from './category/categorySlice.js'
import productReducer from './product/productSlice.js'
import orderReducer, { localStorageMiddleware } from './order/orderSlice.js'

export const store = configureStore({
  reducer: {
    category: categotyReducer,
    product: productReducer,
    order: orderReducer,
  },
  
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(localStorageMiddleware),
})