import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './App.css';
import { v4 } from 'uuid';

function App() {

  const [ todo , setTodo ] = useState('');

  const [ todolist, setTodolist ] = useState([]);

  const changeTodo = function(e) {
    setTodo(e.target.value)
  }

  const addTodo = function(e) {
    e.preventDefault();
    if (todo.trim() === '' ) return;
    let newTodo = { content: todo, key: v4() , completed: false}
    setTodolist([...todolist, newTodo]);
    setTodo("");
  }

  const deleteTodo = function (key) {
    setTodolist(todolist.filter((todo) => todo.key !== key));
  }

  const completed = function(key) { 

    setTodolist(todolist.map(todo => 
      todo.key === key ? {...todo, completed : !todo.completed} : todo));
      //  if (todo.key === key) {
      //     return {
      //       ...todo,
      //       completed: !todo.completed
      //     };
      //   }
      //   return todo;
      
  }

  return (
    <div className="App">
      <h1>todo list</h1>
      <form onSubmit={ addTodo }>
        <input type="text" onChange={ changeTodo } value={ todo} placeholder="pls write todo"/>
        <button>submit</button>
      </form>

      <p>list</p>
      <TodoItem todolist={ todolist } deleteTodo = { deleteTodo } completed = { completed } />
    </div>
  );
}

export default App;
