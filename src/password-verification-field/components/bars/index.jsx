// @flow
import React from "react";

export default (props: { fulfilled: number }) => {
  const { fulfilled } = props;

  let firstBarClass;
  let secondBarClass;
  let thirdBarClass;

  switch (fulfilled) {
    case 0:
      firstBarClass = "";
      secondBarClass = "";
      thirdBarClass = "";
      break;
    case 1:
      firstBarClass = "weak";
      secondBarClass = "";
      thirdBarClass = "";
      break;
    case 2:
      firstBarClass = "strong";
      secondBarClass = "strong";
      thirdBarClass = "";
      break;
    case 3:
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
