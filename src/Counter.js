import React from "react";

class SimpleRenderProps extends React.Component {}

class Counter extends React.Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <p> Our component </p>
        {(() => (
          <button
            onClick={() => this.setState({ counter: this.state.counter + 1 })}
          >
            Counter {this.state.counter}
          </button>
        ))()}
      </div>
    );
  }
}

export default Counter;
