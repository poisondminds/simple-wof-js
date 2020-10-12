import React, { Component } from 'react';
import './App.css';
import Nav from '../nav/Nav';
import Board from '../board/Board';
import Alphabet from '../alphabet/Alphabet';
import GuessList from '../guess_list/GuessList';

class App extends Component {
  state = {
    guesses: []
  };

  handleGuess = guessLetter => {
    this.setState({ guesses: this.state.guesses.concat(guessLetter) });
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="row">
        <div className="col-sm-8">
          <Board />
          <Alphabet onGuess={this.handleGuess}/>
        </div>
        <div className="col-sm-4">
          <GuessList guesses={this.state.guesses} />
        </div>
        </div>
      </div>
    );
  };
}

export default App;
