import React from "react";

class MountingDemo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { message: "Welcome Students" };
    console.log("Mounting: Constructor called");
  }

  componentDidMount() {
    console.log("Mounting: componentDidMount called");
  }

  render() {
    console.log("Mounting: render called");

    return (
      <div>
        <h2>Mounting Lifecycle Demo</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default MountingDemo;