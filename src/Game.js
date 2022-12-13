import './Game.css';
import Board from './components/Board.js';

function Game() {

  // Renders the game
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <hr />
      <Board />
    </div>
  );
}

export default Game;
