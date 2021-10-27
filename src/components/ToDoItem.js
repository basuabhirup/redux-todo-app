import React from 'react';
import "./ToDoItem.css";
import Checkbox from '@mui/material/Checkbox';

function ToDoItem(props) {
  function handleChange() {
    props.toggleDone(props.id);
  }

  return (
    <div className="todo-item">
      <Checkbox
        checked={props.done}
        color="primary"
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
      <p className={props.done && "todo-item-done"}>{props.name}</p>
    </div>
  )
}

export default ToDoItem
