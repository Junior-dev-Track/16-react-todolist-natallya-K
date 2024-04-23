import { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import Form from "./Form.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { title: newTodo, id: Date.now(), done: false }]);
  };
  return (
    <div className="body">
      <h1>My ToDo App</h1>
      <Form addTodo={addTodo} /> {/* Pass addTodo function as a prop */}
      <ToDoList todos={todos} addTodo={addTodo} setTodos={setTodos} />
    </div>
  );
}

export default App;
