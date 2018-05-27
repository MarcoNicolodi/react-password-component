// @flow
import React from "react";
import { Bars, InputGroup, Criterias } from "./components";

const mapFulfilledRatioToStrengthEnum = (ratio: number) => {
  if (ratio <= 0.33) {
    return "weak";
  } else if (ratio > 0.33 && ratio < 0.66) {
    return "strong";
  }

  return "very-strong";
};

export type Strength = "weak" | "strong" | "very-strong";

type Rule = {
  message: string,
  run: (value: string) => boolean
};

type Criteria = { rule: string, fulfilled: ?boolean };

type Props = {
  rules: Array<Rule>
};

type State = {
  criterias: Array<Criteria>,
  strength: ?Strength
};

export default class PasswordField extends React.Component<Props, State> {
  state = {
    criterias: this.props.rules.map(rule => ({
      rule: rule.message,
      fulfilled: null
    })),
    strength: null
  };

  handleInputChange = (value: string) => {
    const { rules } = this.props;
    const criterias: Array<Criteria> = [];
    let fulfilledRules = 0;
    rules.forEach(rule => {
      const fulfilled = rule.run(value);
      if (fulfilled) {
        fulfilledRules += 1;
      }
      criterias.push({ rule: rule.message, fulfilled: rule.run(value) });
    });
    const strength = mapFulfilledRatioToStrengthEnum(
      fulfilledRules / rules.length
    );

    this.setState({ criterias, strength });
  };

  render() {
    return (
      <div className="password-container">
        <InputGroup
          strength={this.state.strength}
          onChange={this.handleInputChange}
        />
        <Bars strength={this.state.strength} />
        <Criterias criterias={this.state.criterias} />
      </div>
    );
  }
}
