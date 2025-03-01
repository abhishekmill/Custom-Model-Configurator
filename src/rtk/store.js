import { configureStore } from "@reduxjs/toolkit";
import modelReducer from  './slices/modelSlice.js'
export const store = configureStore({
  reducer: {
    model: modelReducer,
  },
});
