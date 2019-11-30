import React from "react";

/**
 * Functional React component for congratulations message.
 * @param {object} - React props.
 * @returns {JSX.Element}
 */
export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
