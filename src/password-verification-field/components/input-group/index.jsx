import React from "react";

export default (props: {
  onChange: (value: string) => void,
  strength: string
}) => (
  <div className="input-control">
    <label htmlFor="password">
      Password
      <input
        id="password"
        onChange={event => props.onChange(event.target.value)}
        type="password"
        placeholder="Digite sua senha"
        className={props.strength || undefined}
      />
    </label>
  </div>
);
