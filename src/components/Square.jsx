import React from "react";

function Square({ value, onSquareClick, xisSet }) {
  return (
    <div>
      <button
        className="square"
        style={{
          color: value === "X" ? "orange" : "green",
        }}
        onClick={onSquareClick}
      >
        {value}
      </button>
    </div>
  );
}

export default Square;
