import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ToDoList from "./ToDoList.jsx";
import Form from "./Form.jsx";

const LSKEY = "MyTodoApp";

function App() {
  // Initialize the state with the value retrieved from localStorage
  const initialTodos =
    JSON.parse(window.localStorage.getItem("MyTodoApp.todos")) || [];
  const [todos, setTodos] = useState(initialTodos);

  // Add a todo to the state
  function addTodo(newTodo) {
    setTodos([...todos, { id: uuidv4(), title: newTodo, done: false }]);
  }

  // Save todos to localStorage
  useEffect(() => {
    window.localStorage.setItem("MyTodoApp.todos", JSON.stringify(todos));
  }, [todos]); // Add todos to the dependency array

  // Delete todos from localStorage
  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Calculate the number of unchecked to-do items
  const todosLeft = todos.filter((todo) => !todo.done).length;

  return (
    <div className="body">
      <h1>My ToDo App</h1>
      <Form addTodo={addTodo} /> {/* Pass addTodo function as a prop */}
      <ToDoList
        todos={todos}
        addTodo={addTodo}
        setTodos={setTodos}
        deleteTask={deleteTask} // Pass deleteTask function as a prop
      />
      <p>Number of todos left: {todosLeft}</p> {/* Display the counter */}
    </div>
  );
}

export default App;
