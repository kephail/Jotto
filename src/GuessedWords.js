import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  const { guessedWords } = props;
  let contents;

  if (guessedWords.length) {
    const guessedWordsRows = guessedWords.map((word, i) => (
      <tr data-test="guessed-word" key={i}>
        <td>{word.guessedWord}</td>
        <td>{word.letterMatchCount}</td>
      </tr>
    ));
    contents = (
      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{guessedWordsRows}</tbody>
        </table>
      </div>
    );
  } else {
    contents = <span data-test="guess-instructions">Try to guess the secret word!</span>;
  }
  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default GuessedWords;
