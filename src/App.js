import React, { Component } from "react";
import FunctionalComp from "./components/functionalComp";

import "./App.css";

class App extends Component {
  state = {
    val: 1
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ val: 1 });
    }, 3000);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FunctionalComp val={this.state.val} />
        </header>
      </div>
    );
  }
}

export default App;
