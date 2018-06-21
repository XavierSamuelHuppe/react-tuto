import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const {counter} = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>This component internal counter is at {counter}</button>
      </div>
    );
  }

  handleClick = () => {
    this.setState(prevState => {
      return {counter: prevState.counter + 1};
    })
  }
}

export default Counter;