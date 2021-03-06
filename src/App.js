import React, { Component } from "react";
import PasswordField from "./password-verification-field";
import "./App.css";

class App extends Component {
  render() {
    const rules = [
      {
        message: "Pelo pelo menos 6 caracteres",
        run: value => value.length > 5
      },
      {
        message: "Pelo pelo 1 @",
        run: value => value.indexOf("@") !== -1
      },
      {
        message: "No maximo 8 caracteres",
        run: value => value.length < 8
      }
    ];

    return (
      <div
        style={{
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div style={{ width: "300px" }}>
            <PasswordField rules={rules} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
