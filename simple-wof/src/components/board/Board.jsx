import React, { Component } from "react";
import "./Board.css";

class Board extends Component {
  render() {
    return <div>{this.renderSpaces()}</div>;
  }

  renderSpaces = () => {
    return Array.from(this.props.phrase).map((character) => {
      if (character === " ") {
        return <br></br>;
      }

      const spaceDisplay =
        this.props.guessMap[character] === true ? character : "_";

      return (
        <span
          className={"board-space " + (this.props.hasWon ? "text-success" : "")}
        >
          _{spaceDisplay}_
        </span>
      );
    });
  };
}

export default Board;
