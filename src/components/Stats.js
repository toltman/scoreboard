import React from "react";

const Stats = (props) => {
  const totalPlayers = props.players.length;
  //   let totalPoints = 0;
  //   props.players.forEach((p) => {
  //     totalPoints += p.score;
  //   });
  const totalPoints = props.players.reduce((acc, p) => acc + p.score, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
