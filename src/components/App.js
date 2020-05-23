import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
      },
      {
        name: "James",
        id: 4,
        score: 0,
      },
    ],
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      const players = [...prevState.players];
      const playerIndex = players.findIndex((p) => p.id === index);
      players[playerIndex].score += delta;
      return players;
    });
  };

  handleAddPlayer = (playerName) => {
    this.setState((prevState) => {
      const maxId = prevState.players.reduce(
        (acc, p) => Math.max(acc, p.id),
        0
      );
      const newPlayer = { name: playerName, id: maxId + 1, score: 0 };
      return { players: [...prevState.players, newPlayer] };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      return {
        players: prevState.players.filter((p) => p.id !== id),
      };
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Players list */}
        {this.state.players.map((player) => (
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            handleScoreChange={this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
        <AddPlayerForm handleAddPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
