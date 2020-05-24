import React, { Component } from "react";
import { Provider } from "./Context";
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
        hasHighScore: false,
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
        hasHighScore: false,
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
        hasHighScore: false,
      },
      {
        name: "James",
        id: 4,
        score: 0,
        hasHighScore: false,
      },
    ],
  };

  /* Function to calculate the current highest score */
  updateHighestScore = (players) => {
    const highScore = players.reduce(
      (acc, p) => Math.max(acc, p.score),
      -Infinity
    );
    players.forEach((p) => {
      p.hasHighScore = p.score === highScore ? true : false;
    });
    return players;
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      const players = [...prevState.players];
      const playerIndex = players.findIndex((p) => p.id === index);

      // update player score
      players[playerIndex].score += delta;

      // update hasHighScore property for players
      const updatedPlayers = this.updateHighestScore(players);

      return updatedPlayers;
    });
  };

  handleAddPlayer = (playerName) => {
    this.setState((prevState) => {
      const maxId = prevState.players.reduce(
        (acc, p) => Math.max(acc, p.id),
        0
      );
      const newPlayer = { name: playerName, id: maxId + 1, score: 0 };
      const updatedPlayers = this.updateHighestScore([
        ...prevState.players,
        newPlayer,
      ]);
      return { players: updatedPlayers };
    });
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => {
      const players = prevState.players.filter((p) => p.id !== id);
      const updatedPlayers = this.updateHighestScore(players);
      return {
        players: updatedPlayers,
      };
    });
  };

  render() {
    return (
      <Provider value={this.state.players}>
        <div className="scoreboard">
          <Header />

          {/* Players list */}
          {this.state.players.map((player) => (
            <Player
              name={player.name}
              score={player.score}
              hasHighScore={player.hasHighScore}
              id={player.id}
              key={player.id.toString()}
              handleScoreChange={this.handleScoreChange}
              removePlayer={this.handleRemovePlayer}
            />
          ))}
          <AddPlayerForm handleAddPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
