import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <div>
          I am the parent
        </div>
        {this.props.children}
        <div>
          I am the parent again
        </div>
      </div>
    )
  }
}

export default Calculator;