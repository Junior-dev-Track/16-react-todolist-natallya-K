import React, { useState } from "react";
import "./index.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function ToDoList() {
  const initialTodos = [
    { title: "My first todo", id: 0, completed: false },
    { title: "My second todo", id: 1, completed: false },
    { title: "My third todo", id: 2, completed: true },
  ];

  const [todos, setTodos] = useState(initialTodos);

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
