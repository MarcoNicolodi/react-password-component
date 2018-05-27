import React from "react";
import renderer from "react-test-renderer";
import InputGroup from "./";

describe("InputGroup component", () => {
  const noop = () => {};
  it("should match snapshot when password is empty", () => {
    const tree = renderer.create(<InputGroup onChange={noop} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is weak", () => {
    const tree = renderer
      .create(<InputGroup onChange={noop} strength="weak" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is strong", () => {
    const tree = renderer
      .create(<InputGroup onChange={noop} strength="strong" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should match snapshot when password is very-strong", () => {
    const tree = renderer
      .create(<InputGroup onChange={noop} strength="very-strong" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should call onChange handler passed as props when input changes", () => {
    const onChangeMock = jest.fn();

    const tree = renderer.create(
      <InputGroup onChange={onChangeMock} strength="very-strong" />
    );

    const instance = tree.root;
    const input = instance.findByType("input");
    const fakeEvent = {
      target: {
        value: "my-password"
      }
    };
    input.props.onChange(fakeEvent);
    expect(onChangeMock).toHaveBeenCalledWith("my-password");
  });
});
