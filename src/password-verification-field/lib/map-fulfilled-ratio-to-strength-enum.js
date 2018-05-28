// @flow
import type { Strength } from "../";

export default (ratio: number): Strength => {
  if (ratio < 0.34) {
    return "weak";
  } else if (ratio >= 0.34 && ratio < 1) {
    return "strong";
  }

  return "very-strong";
};
