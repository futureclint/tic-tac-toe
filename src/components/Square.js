import { useState } from 'react';

function Square(props) {

  const [squareValue, setSquareValue] = useState([]);

  // Renders a square
  return (
    <button className="square" onClick={() => setSquareValue('X')}>{squareValue}</button>
  );
}

export default Square;
