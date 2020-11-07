import React, { Component } from "react";
import Modal from "react-modal";
import scoresApis from "../../api/scores";
import ScoresTable from "../scores/ScoreTable";
import "./WinModal.css";

class WinModal extends Component {
  state = {
    username: "",
  };

  render() {
    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      },
    };

    return (
      <Modal isOpen={this.props.isOpen} style={customStyles}>
        <h1>YOU WIN!</h1>
        <ScoresTable />
        <form onSubmit={this.onSaveScore}>
          <input
            id="user-name"
            type="text"
            placeholder="Enter Name"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            required
          ></input>
          <input
            type="submit"
            value="Save Score"
            className="btn-success"
          ></input>
        </form>
        <br></br>
        <button className="btn-primary" onClick={this.props.onRestart}>
          Restart
        </button>
      </Modal>
    );
  }

  handleUsernameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  onSaveScore = (event) => {
    event.preventDefault();
    scoresApis.insertScore({
      username: this.state.username,
      score: this.props.score,
    });
    this.props.onRestart();
  };
}

export default WinModal;
