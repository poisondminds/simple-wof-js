import React, { Component } from "react";

class WinBox extends Component {
  render() {
    return (
      <div className="Bet">
        <h1>YOU WIN!</h1>
        <button className="btn-primary" onClick={this.props.onRestart}>
          Restart
        </button>
      </div>
    );
  }
}

export default WinBox;
