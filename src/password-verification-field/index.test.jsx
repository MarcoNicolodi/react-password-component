import React from "react";
import { shallow, render } from "enzyme";
import PasswordField from "./index";

describe("PasswordField", () => {
  it("should match snapshot", () => {
    expect(render(<PasswordField />)).toMatchSnapshot();
  });
});
