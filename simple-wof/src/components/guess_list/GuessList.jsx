import React, { Component } from "react";
import "./GuessList.css";

class GuessList extends Component {
  renderGuesses = () => {
    return this.props.guesses.map((letter) => {
      return <span className="guess-text">{letter}</span>;
    });
  };

  render() {
    return (
      <div className="GuessList">
        <h2>
          <u>Guesses</u>
        </h2>
        <div>{this.renderGuesses()}</div>
      </div>
    );
  }
}

export default GuessList;
