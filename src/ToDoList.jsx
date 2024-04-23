import React, { useState } from "react";
//import "./index.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function ToDoList() {
  return (
    <>
      <div>
        <h1>My ToDo App</h1>
        <input type="text" placeholder="Type a new to do" />
        <button>Add Todo</button>
        <div>
          <h2>Todos</h2>
          <ol>
            <li>
              <input type="checkbox" />
              Todo 1
            </li>

            <li>
              <input type="checkbox" />
              Todo 2
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
export default ToDoList;
