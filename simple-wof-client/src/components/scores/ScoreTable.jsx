import React, { Component } from "react";
import apis from "../../api";

class ScoresTable extends Component {
  state = {
    scores: [],
  };

  constructor() {
    super();
    this.fetchScores();
  }

  render() {
    return (
      <table>
        <tr>
          <th>User</th>
          <th>Score</th>
          <th>Date</th>
        </tr>
        <tbody>{this.renderScores()}</tbody>
      </table>
    );
  }

  renderScores = () => {
    return this.state.scores.map((score) => {
      return (
        <tr>
          <td>{score.username}</td>
          <td>{score.score}</td>
          <td>{new Date(score.createdAt).toLocaleString()}</td>
        </tr>
      );
    });
  };

  fetchScores() {
    apis.getAllScores().then((scores) => {
      this.setState({
        scores: scores.data.data,
      });
    });
  }
}

export default ScoresTable;
