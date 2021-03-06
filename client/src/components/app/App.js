import React, { Component } from "react";
import "./App.css";
import Nav from "../nav/Nav";
import Board from "../board/Board";
import Alphabet from "../alphabet/Alphabet";
import GuessList from "../guess_list/GuessList";
import CurrentScore from "../current_score/CurrentScore";
import Bet from "../bet/Bet";
import WinModal from "../win_modal/WinModal";
import phrasesApis from "../../api/phrases";

class App extends Component {
  state = {
    phrase: "", // TODO: clue too (obj)
    hiddenLetters: {}, // char -> int
    guesses: [],
    guessMap: {}, // char -> bool
    currentBet: 0,
    currentScore: 0,
    hasWon: false,
  };

  constructor() {
    super();
    this.setInitialState();
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div id="main-content">
          <div className="row">
            <div className="col-sm-8">
              <Bet bet={this.state.currentBet} />
              <Board
                phrase={this.state.phrase}
                guessMap={this.state.guessMap}
                hasWon={this.state.hasWon}
              />
              <Alphabet
                guessMap={this.state.guessMap}
                onGuess={this.handleGuess}
              />
            </div>
            <div className="col-sm-4">
              <CurrentScore score={this.state.currentScore} />
              <GuessList
                guesses={this.state.guesses}
                guessMap={this.state.guessMap}
              />
            </div>
          </div>
        </div>
        <WinModal
          isOpen={this.state.hasWon}
          onRestart={this.handleRestart}
          score={this.state.currentScore}
        />
      </div>
    );
  }

  buildHiddenLetters(phrase) {
    const hiddenLetters = {};
    for (let i = 0; i < phrase.length; i++) {
      const character = phrase[i];
      if (character === " ") {
        continue;
      }

      const currentOccurrences = hiddenLetters[character] ?? 0;
      hiddenLetters[character] = currentOccurrences + 1;
    }
    return hiddenLetters;
  }

  handleGuess = (guessLetter) => {
    if (this.state.guessMap[guessLetter] != null) {
      // Already guessed
      return;
    }

    const isCorrect = this.state.hiddenLetters[guessLetter] != null;

    let scoreIncrement = 0;
    if (isCorrect) {
      scoreIncrement =
        this.state.hiddenLetters[guessLetter] * this.state.currentBet;
      delete this.state.hiddenLetters[guessLetter];
    }

    this.state.guessMap[guessLetter] = isCorrect;

    const hasWon = Object.keys(this.state.hiddenLetters).length === 0;
    this.setState({
      guesses: this.state.guesses.concat(guessLetter),
      currentScore: this.state.currentScore + scoreIncrement, // TODO: add to score
      currentBet: this.getNextBet(),
      hasWon: hasWon,
    });
  };

  handleRestart = () => {
    this.setInitialState();
  };

  getNextBet() {
    return Math.floor(Math.random() * Math.floor(100));
  }

  setInitialState() {
    phrasesApis.getRandomPhrase().then((result) => {
      const phrase = result.data.data.value;
      console.log("Phrase " + phrase);
      this.setState({
        phrase: phrase, // TODO: clue too (obj)
        hiddenLetters: this.buildHiddenLetters(phrase), // char -> int
        guesses: [],
        guessMap: {}, // char -> bool
        currentBet: this.getNextBet(),
        currentScore: 0,
        hasWon: false,
      });
    });
  }
}

export default App;
