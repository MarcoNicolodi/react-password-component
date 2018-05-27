// @flow
import React from "react";

export default (props: {
  criterias: Array<{ rule: string, fulfilled: ?boolean }>
}) => (
  <div className="strengh-criteria">
    {props.criterias.map(criteria => (
      <div className="criteria">
        <div
          className={`round ${
            // eslint-disable-next-line no-nested-ternary
            criteria.fulfilled === undefined
              ? ""
              : criteria.fulfilled
                ? "fulfilled"
                : "unfulfilled"
          }`}
        />
        <p> {criteria.rule} </p>
      </div>
    ))}
  </div>
);
