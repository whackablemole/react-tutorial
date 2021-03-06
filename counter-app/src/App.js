import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
import { render } from "react-dom";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 69 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
    ],
  };

  // Lifecycle hook - Called before a component is loaded into the DOM
  constructor() {
    super();
    console.log("App - Constructor");
  }

  // Lifecycle hook - Called directly after a component is loaded into the DOM
  componentDidMount() {
    console.log("App Mounted");
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters }); // Key and valu are the same so "counters: counters" is not necessary
  };

  // Render() is a lifecycle hook
  render() {
    console.log("App Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
