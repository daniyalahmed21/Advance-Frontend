import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoContext from "./context/TodoContext";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "todo 1",
      Completed : false
    },
  ]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <div className="p-20">
        <AddTodo />
        <TodoList/>
      </div>
    </TodoContext.Provider>
  );
};

export default App;
