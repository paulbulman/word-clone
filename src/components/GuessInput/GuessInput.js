import React from "react";

function GuessInput({ handleNewGuess, disabled }) {
  const initialGuessValue = "";
  const [guess, setGuess] = React.useState(initialGuessValue);

  function handleSubmit(event) {
    event.preventDefault();
    handleNewGuess(guess);
    setGuess(initialGuessValue);
  }

  function handleChange(event) {
    setGuess(event.target.value.toLocaleUpperCase());
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        autoFocus
        disabled={disabled}
        required
        id="guess-input"
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
