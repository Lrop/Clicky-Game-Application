import React from "react";
import Tree from ".tree";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count - 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="tree text-center">
        <div className="tree-header bg-primary text-white">
          Click Counter!
        </div>
        <treeBody
          count={this.state.count}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
