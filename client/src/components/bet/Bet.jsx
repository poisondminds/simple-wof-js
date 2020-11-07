import React, { Component } from "react";

class Bet extends Component {
  render() {
    return (
      <div className="Bet">
        <h4>
          Bet: <span className="text-danger">{this.props.bet}</span>
        </h4>
      </div>
    );
  }
}

export default Bet;
