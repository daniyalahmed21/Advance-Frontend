import React, { useState } from "react";
import { useLocation } from "react-router";
import MaskedText from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import Hangman from "../components/Hangman/Hangman";

const PlayGame = () => {
  const location = useLocation();
  const wordSelected = location.state?.wordSelected;
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);
  const [guessed, setGuessed] = useState();

  const onLetterClick = (LetterClicked) => {
    setGuessedLetters((prev) => [...prev, LetterClicked]);
    if (wordSelected?.toUpperCase().includes(LetterClicked)) {
      console.log("correct");
    } else {
      console.log("wrong");
      setStep((prev) => prev + 1);
    }
    console.log(LetterClicked);
  };

  return (
    <div className="p-5 flex flex-col  items-center gap-20 mt-10 ">
      {wordSelected && (
        <>
          <MaskedText
            text={wordSelected}
            guessedLetters={guessedLetters}
            setGuessed={setGuessed}
          />
          {!guessed ? (
            <>
              <LetterButtons
                step={step}
                text={wordSelected}
                guessedLetters={guessedLetters}
                onLetterClick={onLetterClick}
              />
              <Hangman step={step} />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default PlayGame;
