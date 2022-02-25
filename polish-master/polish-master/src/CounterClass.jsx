import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    decrement = () => {
   this.setState((previousState) => ({ count: previousState.count - 1 }));
 }
 increment = () => {
this.setState((previousState) => ({ count: previousState.count +1 }));
 }
  render() {
    return (
      <div>
        <h1>
          <p>The count is: {this.state.count}</p>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </h1>
      </div>
    );
  }
}

export default CounterClass;

