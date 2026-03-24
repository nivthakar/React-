import React from "react";

class PureComponentDemo extends React.PureComponent {

  render() {
    console.log("PureComponent Rendered");

    return (
      <div>
         <h2>Pure Component Demo</h2>
        <p>Value: {this.props.value}</p>
      </div>
    );
  }
}

export default PureComponentDemo;