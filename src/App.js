import React, { Component } from "react";
import PasswordField from "./password-verification-field";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div style={{ width: "300px" }}>
            <PasswordField />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
