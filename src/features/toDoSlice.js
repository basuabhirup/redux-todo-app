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
    },
    toggleCheck: (state, action) => {
      state.toDoList.forEach(item => {
        if(action.payload === item.id) {
          item.done = !item.done;
        }
      })
    }
  }
});

export const { saveTodo, toggleCheck } = toDoSlice.actions
export const selectToDoList = state => state.todos.toDoList
export default toDoSlice.reducer