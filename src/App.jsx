import ToDoList from "./ToDoList.jsx";
import Form from "./Form.jsx";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="body">
      <h1>My ToDo App</h1>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
