import React from "react";

function List({
  history,
  setHistory,
  squares,
  setxisSet,
  currentMove,
  setCurrentMove,
}) {
  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove);
    setxisSet(nextMove % 2 === 0);
  };

  const moves = history.map((squares, move) => {
    let description;

    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="listdata">
      <ol>{moves}</ol>
    </div>
  );
}

export default List;
