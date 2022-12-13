import Square from './Square.js';

function Board() {

  // Function to render a square
  const renderSquare = (i) => {
    return (
      <Square value={i} />
    );
  }

  // Renders the board
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </div>
  );
}

export default Board;
