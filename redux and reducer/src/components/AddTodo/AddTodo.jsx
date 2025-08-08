import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const { setTodos } = useContext(TodoContext);

  const addTodo = () => {
    console.log("todos");

    setTodos((todos) => [...todos, { id: todos.length + 1, text: inputText }]);
    setInputText("");
  };

  return (
    <div className="space-x-3">
      <input
        className="border-2 rounded-md p-2 "
        type="text"
        value={inputText}
        placeholder="Enter todo"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
