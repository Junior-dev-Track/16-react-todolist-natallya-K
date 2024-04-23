import React, { useState } from "react";
import "./index.css";

function ToDoList({ todos, addTodo, setTodos }) {
  // Handle checkbox status
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <div>
        <div>
          <h2>Todos</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  id={todo.id}
                  name={todo.title}
                  checked={todo.done}
                  onChange={() => handleToggle(todo.id)}
                />
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
