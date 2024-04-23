import React, { useRef } from "react";

function Form({ addTodo }) {
  //Add addTodo as a prop
  const inputRef = useRef();
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const inputElement = inputRef.current;
    const newTodo = inputElement.value.trim(); // Get the value of the input field and trim any leading or trailing whitespace
    if (newTodo !== "") {
      addTodo(newTodo); // Call the addTodo function passed as a prop with the newTodo value
      inputElement.value = ""; // Clear the input field
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          placeholder="Write a new todo"
          ref={inputRef}
        />
        <button type="submit">Add todo</button>
      </form>
    </>
  );
}

export default Form;
