import React from 'react';
import { v4 } from 'uuid';

export default function TodoItem(props) {
    return (
      <ul>
        {props.todolist.map((todo) => (
          <li key={v4()} >
              {todo.completed}
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.content}</span>
            <button onClick={() => props.deleteTodo(todo.key)}>delete</button>
            <button onClick={() => props.completed(todo.key)}>completed</button>
          </li>
        ))}
      </ul>
    );
}
