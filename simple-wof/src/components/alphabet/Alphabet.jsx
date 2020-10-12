import React, { Component } from "react";
import "./Alphabet.css";

class Alphabet extends Component {
  renderAlphabet = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return Array.from(alphabet).map((letter) => {
      return (
        <button
          className="btn btn-outline-dark btn-alphabet"
          onClick={() => {
            this.props.onGuess(letter);
          }}
        >
          {letter}
        </button>
      );
    });
  };

  render() {
    return <div className="Alphabet">{this.renderAlphabet()}</div>;
  }
}

export default Alphabet;
