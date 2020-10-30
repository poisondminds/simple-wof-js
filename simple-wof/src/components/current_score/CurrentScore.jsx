import React, { Component } from "react";

class CurrentScore extends Component {
  render() {
    return (
      <div className="CurrentScore">
        <h2>
          <u>Current Score:</u>
        </h2>
        <h4>{this.props.score}</h4>
      </div>
    );
  }
}

export default CurrentScore;
