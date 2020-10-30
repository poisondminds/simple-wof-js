import React, { Component } from "react";
import Modal from "react-modal";
import "./WinModal.css";

class WinModal extends Component {
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
        <form onSubmit={this.onSaveScore}>
          <input
            id="user-name"
            type="text"
            placeholder="Enter Name"
            required
          ></input>
          <input
            type="submit"
            title="Save Score"
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

  onSaveScore = (event) => {
    event.preventDefault();
    alert("Not yet implemented");
  };
}

export default WinModal;
