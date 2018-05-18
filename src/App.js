import React, { Component } from "react";
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
                <div className="criteria">
                  <div className="round" />
                  <p> Pelo menos 6 caracteres </p>
                </div>
                <div className="criteria">
                  <div className="round fulfilled" />
                  <p> Pelo menos 1 letra maíuscula </p>
                </div>
                <div className="criteria">
                  <div className="round unfulfilled" />
                  <p> pelo menos 1 número </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
