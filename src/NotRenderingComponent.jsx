import React from 'react';

class NotRenderingComponent extends React.Component {
  render() {
    return false;
    return (
      <div>
        I'm actualy not showing up because you returned false before!
      </div>
    );
  }

  componentDidMount() {
    // But I DO mount
    // console.log("");
  } 
}

export default NotRenderingComponent;