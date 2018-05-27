import React from "react";
import renderer from "react-test-renderer";
import Criterias from "./";

describe("Criterias component", () => {
  it("should match snapshot", () => {
    const rules = [
      {
        rule: "Pelo menos 6 caracteres",
        fulfilled: false
      },
      {
        rule: "Pelo menos 1 letra",
        fulfilled: true
      },
      {
        rule: "Pelo menos 1 número",
        fulfilled: true
      }
    ];
    const tree = renderer.create(<Criterias criterias={rules} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
