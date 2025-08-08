import React, { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

const Todo = ({ todo }) => {
  const { todos, setTodos } = useContext(TodoContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);
  const [isCompleted, setIsCompleted] = useState(todo.completed || false);

  const deleteTodo = (todoToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoToDelete.id);
    setTodos(updatedTodos);
  };

  const saveEditedTodo = ( ) =>{
    console.log(editedText)
   const updatedTodos =  todos.map((t)=>(
        t.id === todo.id ? {...t,text:editedText} :t
    ))

    setTodos(updatedTodos)
    setIsEditing(false)
  }

   // Mark as completed
   const toggleComplete = () => {
    const updatedTodos = todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !isCompleted } : t
    );
    setIsCompleted(!isCompleted);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex gap-2 items-center">
      <input type="checkbox" checked={isCompleted} onChange={toggleComplete}/>
      {isEditing ? (
        <input type="text" value={editedText} onChange={(e)=>setEditedText(e.target.value)}/>
      ) : (
        <span className=" capitalize">{todo.text}</span>
      )}
      {isEditing?
      <button onClick={saveEditedTodo} className="border p-2 px-4 rounded-md">Save</button>
      
      :
      <button onClick={()=>setIsEditing(true)} className="border p-2 px-4 rounded-md">Edit</button>
      
      }
      <button
        onClick={() => deleteTodo(todo)}
        className="border p-2 px-4 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
