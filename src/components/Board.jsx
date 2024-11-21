import React from "react";
import Square from "./Square";
import { useState } from "react";

function Board({ squares, onPlay, xisSet, setxisSet }) {
  //
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xisSet ? "X" : "O";
    setxisSet(!xisSet);
    onPlay(newSquares);
  };

  const winner = calculateWinner(squares);

  let winnerStatus = winner
    ? "Winner: " + winner
    : !squares.includes(null)
    ? "Draw"
    : "Next player: " + (xisSet ? "X" : "O");

  // winnerStatus = history.length === 10 && !winner && "Draw";
  if (calculateWinner(squares) || winnerStatus === "Draw") {
    console.log("hii");
    
  }
  return (
    <div>
      <div className="result">{winnerStatus}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          xisSet={xisSet}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          xisSet={xisSet}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          xisSet={xisSet}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          xisSet={xisSet}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          xisSet={xisSet}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          xisSet={xisSet}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          xisSet={xisSet}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          xisSet={xisSet}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          xisSet={xisSet}
        />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Board;
