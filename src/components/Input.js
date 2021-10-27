import React from 'react';
import "./Input.css";
import { useDispatch } from 'react-redux';
import { saveTodo } from '../features/toDoSlice';

function Input() {
  const [input, setInput] = React.useState();
  const dispatch = useDispatch();

  function addItem() {
    console.log(`Item Added: ${input}`);
    setInput("");

    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  }

  return (
    <div className="input">
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input}></input>
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default Input
