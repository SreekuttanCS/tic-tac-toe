import React, { useState } from "react";
import Square from "./components/Square";
import Board from "./components/Board";
import List from "./components/List";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xisSet, setxisSet] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setxisSet(!xisSet);
  };
  const resetButton = () => {
     setHistory([Array(9).fill(null)]);
     setxisSet(true);
     setCurrentMove(0);
  };
  return (
    <div className="game">
      <div>
        <h1 className="heading">TIC TAC TOE</h1>
      </div>
      <div className="section">
        <div className="game-board">
          <Board
            squares={currentSquares}
            onPlay={handlePlay}
            xisSet={xisSet}
            setxisSet={setxisSet}
            setHistory={setHistory}
            history={history}
          />
          <div className="btn-section">
            <button className="reset-button" onClick={resetButton}>
              Reset
            </button>
          </div>
        </div>
        <div className="game-info">
          <List
            squares={currentSquares}
            currentMove={currentMove}
            setCurrentMove={setCurrentMove}
            history={history}
            setHistory={setHistory}
            setxisSet={setxisSet}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
