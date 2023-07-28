import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ guess, answer }) {
  const letters = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((i) => {
        const className = letters ? `cell ${letters[i].status}` : "cell";
        return (
          <span key={i} className={className}>
            {letters && letters[i].letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
