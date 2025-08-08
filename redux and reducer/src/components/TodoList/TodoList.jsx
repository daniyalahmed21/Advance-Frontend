import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import Todo from "../Todo/Todo";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className="flex flex-col space-y-3 mt-4">
      {todos.map((todo, index) => (
        <div key={index} className="flex items-center space-x-2">
          <Todo todo={todo} />
          
        </div>
      ))}
    </div>
  );
};

export default TodoList;
