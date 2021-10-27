import React from 'react';
import "./ToDoItem.css";
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from "react-redux";
import { toggleCheck } from '../features/toDoSlice';

function ToDoItem(props) {
  const dispatch = useDispatch();

  function handleCheck() {
    dispatch(toggleCheck(props.id));
  }

  return (
    <div className="todo-item">
      <Checkbox
        checked={props.done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <p className={props.done && "todo-item-done"}>{props.name}</p>
    </div>
  )
}

export default ToDoItem
