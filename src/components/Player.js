import React, { PureComponent } from "react";
import Counter from "./Counter";

class Player extends PureComponent {
  render() {
    const { name, id, score, removePlayer, handleScoreChange } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter id={id} score={score} changeScore={handleScoreChange} />
      </div>
    );
  }
}

export default Player;
