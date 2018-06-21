import React from 'react';

class MyForm extends React.Component {

  state = {
    value: 'mango',
    name: 'nobody'
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>all imputs can have a value contained in the state</h4>
          <label>Put fruit here</label>
          <input type="text" value={this.state.value} onChange={this.updateInsideValue}/>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input type="submit"/>
          <div>{this.state.value}</div>
          <h4>Multi select with multiple={'{true}'}</h4>
          <select multiple={true} >
            <option value="A">Some As</option>
            <option value="B">Some Bs</option>
            <option value="C">Some Cs</option>
            <option value="D">Some Ds</option>
          </select>
          <h4>Components in a form can have names</h4>
          <div><input name='ONE' type="text" onChange={this.whoUpdatedLast}/></div>
          <div><input name='TWO' type="text" onChange={this.whoUpdatedLast}/></div>
          <div><input name='THREE' type="text" onChange={this.whoUpdatedLast}/></div>
          <div>It is component {this.state.name} that changed last</div>
          {/* <h4>You won't be able to change this</h4>
          <input type="text" value="IMPOSSIBLE"/> */}
        </form>
      </div>
    );
  }

  whoUpdatedLast = (event) => {
    this.setState({name: event.target.name});
  }

  handleChange = (event) =>  {
    this.setState({value: event.target.value});
  }

  updateInsideValue = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    console.log("submittt");
    this.setState({value: 'banana!'});
    event.preventDefault();
  }
}

export default MyForm;