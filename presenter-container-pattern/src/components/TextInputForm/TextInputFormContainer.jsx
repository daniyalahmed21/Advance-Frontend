import React, { useState } from "react";
import TextInputForm from "./TextInputForm";

const TextInputFormContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType,setInputType] = useState("text")

  function handleFormSubmit(event) {
    event.preventDefault();
    setInputValue("")
    console.log("Form submitted", inputValue);
  }

  function handleTextInputChange(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  function handleShowHideClick() {
    if(inputType==="text"){
        setInputType("password")
    }else{
        setInputType("text")
    }
  }

  return (
    <TextInputForm
      value={inputValue}
      inputType={inputType}
      handleTextInputChange={handleTextInputChange}
      handleFormSubmit={handleFormSubmit}
      handleShowHideClick={handleShowHideClick}
    />
  );
};

export default TextInputFormContainer;
