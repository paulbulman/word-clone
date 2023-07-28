import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessList from "../GuessList/GuessList";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleNewGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
  }

  const gameIsWon = guesses.includes(answer);
  const gameIsLost = guesses.length === NUM_OF_GUESSES_ALLOWED && !gameIsWon;

  const gameIsOver = gameIsWon || gameIsLost;

  return (
    <>
      {gameIsWon && <WonBanner guessCount={guesses.length} />}
      {gameIsLost && <LostBanner answer={answer} />}

      <GuessList guesses={guesses} answer={answer} />
      <GuessInput handleNewGuess={handleNewGuess} disabled={gameIsOver} />
    </>
  );
}

export default Game;
