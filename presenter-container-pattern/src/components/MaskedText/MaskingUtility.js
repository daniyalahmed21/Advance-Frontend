/**
 * @param {string} originalText - The word which is given as input and is expected to be guessed.
 * @param {string[]} guessedLetters - Letters which are already guessed.
 */

export function getMaskedText (originalText,guessedLetters) {
    guessedLetters = guessedLetters.map((Letter)=> Letter.toUpperCase())
    const guessedLettersSet = new Set(guessedLetters)

    const result = originalText.toUpperCase().split("").map((char)=>{
        if(guessedLettersSet.has(char)){
            return char ;
        }
        else {
            return "_"
        }
    })

    return result
}

