import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 2,
    imageUrl: "https://picsum.photos/200",
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleReset = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Press me
        </button>
        <button onClick={this.handleReset} className="btn btn-warning btn-sm">
          Reset
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
