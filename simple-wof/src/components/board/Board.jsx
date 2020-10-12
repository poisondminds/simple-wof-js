import React, { Component } from "react";
import "./Board.css";

class Board extends Component {
  state = {
    phrase: "grandpad is cool",
  };

  renderSpaces = () => {
    return Array.from(this.state.phrase).map((character) => {
      if (character === " ") {
        return <br></br>;
      }
      return <span className="board-space">_{character}_</span>;
    });
  };

  render() {
    return <div>{this.renderSpaces()}</div>;
  }
}

export default Board;
