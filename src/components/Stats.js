import React from "react";

const Stats = ({ players }) => {
  const totalPlayers = players.length;
  //   let totalPoints = 0;
  //   players.forEach((p) => {
  //     totalPoints += p.score;
  //   });
  const totalPoints = players.reduce((acc, p) => acc + p.score, 0);
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
