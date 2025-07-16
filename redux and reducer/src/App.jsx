import React, { useReducer } from "react";

const reducer = (state, action) => {
  if(action.type === "incremented_age"){
    return {
      age : state.age + 1
    }
  }

};

const App = () => {
  const [state,dispatch] = useReducer(reducer, { age: 18 });
  return (
    <div>
      <h1>Your age is {state.age}</h1>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>Increment age</button>
    </div>
  );
};

export default App;
