import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.upTemp}>upTemp</button> */}
        <button onClick={this.props.onTempChange}>upTemp</button>
        {this.props.celsius}
      </div>
    )
  }
}

export default Calculator;