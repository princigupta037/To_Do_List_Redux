import React from 'react';
import Input from './components/input';
import './App.css';
import TodoItems from './components/TodoItems';
import { useSelector } from 'react-redux'
import { selectTodoList } from './features/todoSlice'


const todoList = useSelector(selectTodoList)
// const todoList = [{
//   item: 'todo1',
//   done:false,
//   id: 1122
// },
// {
//   item: 'todo2',
//   done: true,
//   id: 112233
// }
// ]


function App() {
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todocontainer">
          {
            todoList.map(item=> (
            <TodoItems 
              name={item.item}
              done={item.done}
              id={item.id}
            />))
          }
        
        </div>
        <Input /> 
      </div>
      
      
    </div>
  );
}

export default App;
