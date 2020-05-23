import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  };

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
