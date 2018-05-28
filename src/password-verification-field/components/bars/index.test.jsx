import React from "react";
import renderer from "react-test-renderer";
import Bars from "./";

describe("Bars component", () => {
  it("should match snapshot when password field is empty", () => {
    const tree = renderer.create(<Bars strength={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is weak", () => {
    const tree = renderer.create(<Bars strength="weak" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is strong", () => {
    const tree = renderer.create(<Bars strength="strong" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is very strong", () => {
    const tree = renderer.create(<Bars strength="very-strong" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
