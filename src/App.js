import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div className="password-container">
            <div className="input-control">
              <label for="password"> Password </label>
              <input type="password" placeholder="Digite sua senha" />
            </div>
            <div className="bars">
              <div className="bar weak" />
              <div className="bar strong" />
              <div className="bar very-strong" />
            </div>
            <div className="strengh-criteria">
              <div>
                <div className="round" />
                <p> Pelo menos 6 caracteres </p>
              </div>
              <div>
                <div className="round" />
                <p> Pelo menos 1 letra maíuscula </p>
              </div>
              <div>
                <div className="round" />
                <p> pelo menos 1 número </p>
              </div>
            </div>
          </div>
        </p>
      </div>
    );
  }
}

export default App;