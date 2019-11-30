import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "./test/utils";

import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [
    {
      guessedWord: "train",
      letterMatchCount: 3,
    },
  ],
};

/**
 * @function setup
 * @param {object} props - Component props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

it("Does not throw warning with expected props.", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("If there are no words guessed.", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  it("Renders without error.", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  it("Renders instructions to guess a word.", () => {
    const instructions = findByTestAttr(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("If there are guessed words.", () => {});
