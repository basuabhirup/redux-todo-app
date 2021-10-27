import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  toDoList: []
}

const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.toDoList.push(action.payload);
    }  
  }
});

export const { saveTodo } = toDoSlice.actions
export default toDoSlice.reducer