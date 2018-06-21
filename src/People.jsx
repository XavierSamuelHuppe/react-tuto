import React from 'react';

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        "Donovan",
        "Xavier",
        "Lucie",
        "Mario"
      ]
    }
  }

  render() {
    const {people} = this.state;
    //When we don't have stable Ids to use as key, we can use the index. 
    const names = people.map((person, index) => <li key={index}>{person}</li> );
    return (
      <div>
        <h4>
          map() is calculated outside:
        </h4>
        <ul>
          {names}
        </ul>
        <h4>
          map() is calculated inside:
        </h4>
        <ul>
          {people.map((person, index) => <li key={index}>{person}</li>)}
        </ul>
      </div>
    );
  }
}

export default People;