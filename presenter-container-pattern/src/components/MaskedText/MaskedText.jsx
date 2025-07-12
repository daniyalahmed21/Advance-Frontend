import React from "react";
import { getMaskedText } from "./MaskingUtility";

const MaskedText = ({ text, guessedLetters ,setGuessed}) => {
  const maskedString = getMaskedText(text, guessedLetters );
  setGuessed(() => maskedString.includes("_")? false : true)
  return (
    <div>
      {maskedString.includes("_")?maskedString.map((Letter,index) => (
        <span key={index} className="mx-2 text-6xl">{Letter}</span>
      )):
      <h1>You Guessed correctly</h1>
      }
    </div>
  );
};

export default MaskedText;
