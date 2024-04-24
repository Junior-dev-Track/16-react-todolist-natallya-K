import React, { useState } from "react";
import "./index.css";

function ToDoList({ todos, addTodo, setTodos, deleteTask }) {
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

  // Delete task function
  const handleDelete = (id) => {
    deleteTask(id); // Call deleteTask function passed as a prop
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
                {todo.title}{" "}
                <button
                  className="delete-button"
                  onClick={() => deleteTask(todo.id)}
                  disabled={!todo.done} // Disable the button if the to-do item is not checked
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
