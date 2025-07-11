import React from "react";
import getButtonStyle from "./getButtonStyle";

export const Button = ({
  text,
  onClickHandler,
  styleType = "primary",
  type = "button",
}) => {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={`px-3 m-2 text-white ${getButtonStyle(styleType)} py-2`}
    >
      {text}
    </button>
  );
};
