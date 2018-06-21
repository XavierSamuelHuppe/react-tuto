import React from 'react';
import Parent from './Parent';

class IGiveAChild extends React.Component {
  render() {
    return (
      <div>
        <Parent>
          <div>
            I am the child
          </div>
        </Parent>
      </div>
    )
  }
}

export default IGiveAChild;