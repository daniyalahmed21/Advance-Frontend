import React, { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router";

const TextInputFormContainer = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("text");
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();

    if (inputValue) {
        navigate("/play",{ state: { wordSelected: inputValue } })
    setInputValue("");
  }
  }
  function handleTextInputChange(event) {
    setInputValue(event.target.value);
  }

  function handleShowHideClick() {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
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
