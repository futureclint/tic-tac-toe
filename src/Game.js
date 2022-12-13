import './Game.css';
import Header from './components/Header.js';
import Board from './components/Board.js';

function Game() {

  // Renders the game
  return (
    <div className="game">
      <Header />
      <Board />
    </div>
  );
}

export default Game;
