import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from "../features/toDoSlice"

export default configureStore({
  reducer: {
    todos: toDoReducer
  },
});
