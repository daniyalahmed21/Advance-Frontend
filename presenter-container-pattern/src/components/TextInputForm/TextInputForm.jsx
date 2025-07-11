import React from "react";
import TextInput from "../TextInput/TextInput";
import { Button } from "../Button/Button";

const TextInputForm = ({
  inputType,
  value,
  handleTextInputChange,
  handleFormSubmit,
  handleShowHideClick,
}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <TextInput
        type={inputType}
        value={value}
        onChangeHandler={handleTextInputChange}
        label="Enter a word or phrase"
      />

      <Button
        onClickHandler={handleShowHideClick}
        styleType="warning"
        text={inputType === "text" ? "Hide" : "Show"}
      />
      <Button type="submit" styleType="primary" text="Submit" />
    </form>
  );
};

export default TextInputForm;
