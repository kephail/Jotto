import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "./test/utils";
import Congrats from "./Congrats";

const defaultProps = { success: false };

/**
 * @function setup
 * @param {object} props - Component props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

it("Should render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

it("Renders no text when `success` prop is false", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

it("Renders non-empty congrats message when `success` prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

it("Does not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
