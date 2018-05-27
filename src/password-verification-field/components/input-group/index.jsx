import React from "react";
import type { Strength } from "../../";

export default (props: {
  onChange: (value: string) => void,
  strength: ?Strength
}) => (
  <div className="input-control">
    <label htmlFor="password">
      Password
      <input
        id="password"
        onChange={event => props.onChange(event.target.value)}
        type="password"
        placeholder="Digite sua senha"
        className={props.strength}
      />
    </label>
  </div>
);
