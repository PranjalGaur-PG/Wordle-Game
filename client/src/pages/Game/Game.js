import React, { useEffect, useState } from "react";
import Row from "../../components/row/Row";
import Keyboard from "../../components/keyboard/Keyboard";

const Game = ({ attempts, setAttempts }) => {
  const [board, setBoard] = useState([
    <Row input={""} key={0} />,
    <Row input={""} key={1} />,
    <Row input={""} key={2} />,
    <Row input={""} key={3} />,
    <Row input={""} key={4} />,
    <Row input={""} key={5} />,
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(input);
    let temp_board = board;

    temp_board[attempts.length] = <Row input={input} key={attempts.length} />;

    setBoard(temp_board);
  }, [input]);

  useEffect(() => {}, [board]);

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  const handler = (e) => {
    var ch = e.key;

    console.log("char", ch);

    if (ch === "Backspace") {
      if (input.length > 0) {
        setInput(input.slice(0, -1));
      }
    } else if (ch === "Enter") {
      if (input.length === 5) console.log("Submit");
    } else if (input.length < 5) {
      ch = ch.toUpperCase();
      if (isLetter(ch)) {
        setInput(input + ch);
      }
    }
  };

  return (
    <div onKeyDown={(e) => handler(e)} tabIndex={0}>
      <div className="game-board">{board}</div>
      <Keyboard />
    </div>
  );
};

export default Game;