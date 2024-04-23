import React, { useRef } from "react";

function Form() {
  const inputRef = useRef();
  function handleSubmit() {
    const inputElement = inputRef.current;
    //Do Something with inputElement
    console.log(inputElement.value);
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
