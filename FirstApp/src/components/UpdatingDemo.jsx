import React from "react";

class UpdatingDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidUpdate() {
    console.log("Updating: componentDidUpdate called");
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Updating: render called");

    return (
      <div>
        <h2>Updating Lifecycle Demo</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default UpdatingDemo;