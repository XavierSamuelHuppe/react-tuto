import React from 'react';
import Welcome from './Welcome';
// import Clock from './Clock';
// import Counter from './Counter';
// import NotRenderingComponent from './NotRenderingComponent';
// import People from './People';
// import MyForm from './MyForm';
// import BoilingVerdict from './BoilingVerdict';
// import Calculator from './Calculator';
import IGiveAChild from './IGiveAChild';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "XavierAI",
      celsius: 98
    }
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.name}/>
        {/* <Clock/>
        <Counter/>
        <Counter/> */}
        {/* <NotRenderingComponent/> */}
        {/* <People/>
        <MyForm/> */}
        {/* <BoilingVerdict celsius={this.state.celsius}/> */}
        {/* <Calculator celsius={this.state.celsius} onTempChange={this.upTemp}/> */}
        <IGiveAChild/>
      </div>
    );
  }

  upTemp = () => {
    this.setState({
      celsius: this.state.celsius + 1
    });
  }
}

export default App;