import React, { useState } from "react";
//import "./index.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function ToDoList() {
  const initialTodos = [
    { title: "My first todo", id: 0 },
    { title: "My second todo", id: 1 },
    { title: "My third todo", id: 2 },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <>
      <div>
        <h1>My ToDo App</h1>
        <input type="text" placeholder="Type a new to do" />
        <button>Add Todo</button>
        <div>
          <h2>Todos</h2>
          <ul>
            {todos.map((todo, index) => (
              <li key={index.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
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
