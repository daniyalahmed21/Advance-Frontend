import React from "react";

const Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const LetterButtons = ({ text, step, guessedLetters, onLetterClick }) => {
  const originalText = new Set(text.toUpperCase().split(""));
  guessedLetters = new Set(guessedLetters);



  const buttonStyle = (letter) => {
    if (guessedLetters.has(letter)) {
      return originalText.has(letter) ? "bg-green-500" : "bg-red-500";
    } else {
      return "bg-blue-500";
    }
  };

  const handleOnLetterClick = (event) => {
    const LetterClicked = event.target.value;
    onLetterClick?.(LetterClicked);
  };

  return (
    <div className="flex justify-center gap-2 text-2xl flex-wrap md:w-[50%] w-full">
      {step >= 7 ? (
        <h1>Game Over</h1>
      ) : (
        Alphabets.map((Alphabet, index) => {
          return (
            <button
              value={Alphabet}
              onClick={handleOnLetterClick}
              className={`p-2 px-4 text-white rounded-2xl ${buttonStyle(
                Alphabet
              )}`}
              key={index}
              disabled={guessedLetters.has(Alphabet)}
            >
              {Alphabet}
            </button>
          );
        })
      )}
    </div>
  );
};

export default LetterButtons;
