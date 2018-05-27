import React from "react";
import renderer from "react-test-renderer";
import Bars from "./";

describe("Bars component", () => {
  it("should match snapshot when password is doesnt match any criteria", () => {
    const tree = renderer.create(<Bars fulfilled={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is weak", () => {
    const tree = renderer.create(<Bars fulfilled={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is strong", () => {
    const tree = renderer.create(<Bars fulfilled={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is very strong", () => {
    const tree = renderer.create(<Bars fulfilled={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
