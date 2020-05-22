import React from "react";
import Counter from "./Counter";

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => props.removePlayer(props.id)}
        >
          ✖
        </button>
        {props.name}
      </span>

      <Counter
        id={props.id}
        score={props.score}
        changeScore={props.handleScoreChange}
      />
    </div>
  );
};

export default Player;
