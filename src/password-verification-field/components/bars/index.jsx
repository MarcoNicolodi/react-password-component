// @flow
import React from "react";
import type { Strength } from "../../index";

export default (props: { strength: Strength }) => {
  const { strength } = props;

  let firstBarClass;
  let secondBarClass;
  let thirdBarClass;

  switch (strength) {
    case null:
      firstBarClass = "";
      secondBarClass = "";
      thirdBarClass = "";
      break;
    case "weak":
      firstBarClass = "weak";
      secondBarClass = "";
      thirdBarClass = "";
      break;
    case "strong":
      firstBarClass = "strong";
      secondBarClass = "strong";
      thirdBarClass = "";
      break;
    case "very-strong":
      firstBarClass = "very-strong";
      secondBarClass = "very-strong";
      thirdBarClass = "very-strong";
      break;
    default:
      throw new Error("Cant parse fulfilled");
  }

  return (
    <div className="bars">
      <div className={`bar ${firstBarClass}`} />
      <div className={`bar ${secondBarClass}`} />
      <div className={`bar ${thirdBarClass}`} />
    </div>
  );
};
