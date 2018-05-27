// @flow
import React from "react";
import { Bars, InputGroup, Criterias } from "./components";

type Rule = {
  message: string,
  run: (value: string) => boolean
};

type Props = {
  rules: Array<Rule>
};

export default class PasswordField extends React.Component<Props> {
  handleInputChange = (value: string) => {
    const { rules } = this.props;
  };

  render() {
    return (
      <div className="password-container">
        <InputGroup strength="very-strong" onChange={this.handleInputChange} />
        <Bars fulfilled={3} />
        <Criterias
          criterias={[
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
          ]}
        />
      </div>
    );
  }
}
