import React from 'react';
import Input from './components/Input';
import ToDoItem from './components/ToDoItem';
import { useSelector } from 'react-redux';
import { selectToDoList } from './features/toDoSlice';
import './App.css';

function App() {
  const toDoList = useSelector(selectToDoList);

  return (
    <div className="app">
    <div className="app-container">
      <div className="app-todos">
        {toDoList.map(item => (
          <ToDoItem 
            name={item.item}
            done={item.done}
            id={item.id} 
          />
        ))}
      </div>      
      <Input />
    </div>
    </div>
  );
}

export default App;
