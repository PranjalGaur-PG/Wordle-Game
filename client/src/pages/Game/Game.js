import React from "react";
import Row from "../../components/row/Row";
import Keyboard from '../../components/keyboard/Keyboard';

const Game = () => {

  let board = [];
  for (var i = 0; i < 6; i++) board.push(<Row />);

  return ( 
    <div>
      <div className="game-board">
        {board}
      </div>
      <Keyboard />
    </div>
  );
};

export default Game;