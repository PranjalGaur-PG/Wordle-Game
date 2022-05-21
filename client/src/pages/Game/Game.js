import React, { useEffect, useState } from "react";
import Row from "../../components/row/Row";
import Keyboard from "../../components/keyboard/Keyboard";
import { addAttempt } from "../../api/wordleAPI";

const Game = ({ attempts, setAttempts, session }) => {
  // const [board, setBoard] = useState([
  //   <Row attempts={attempts} key={0} />,
  //   <Row attempts={attempts} key={1} />,
  //   <Row attempts={attempts} key={2} />,
  //   <Row attempts={attempts} key={3} />,
  //   <Row attempts={attempts} key={4} />,
  //   <Row attempts={attempts} key={5} />,
  // ]);

  const [input, setInput] = useState("");

  // useEffect(() => {
  //   console.log(input);
  //   let temp_board = board;

  //   temp_board[attempts.length] = <Row input={input} key={attempts.length} />;

  //   setBoard([...temp_board]);
  // }, [input]);

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  const handleSubmit = async () => {
    const attempt = await addAttempt(input, session);
    console.log(attempt);

    let temp_attempts = attempts;
    temp_attempts[attempts.length - 1] = attempt;
    setAttempts([...temp_attempts, { response: "", color: [] }]);
    setInput("");
    console.log(attempts);
  };

  const handler = (e) => {
    var ch = e.key;

    console.log("char", ch);

    if (ch === "Backspace") {
      if (input.length > 0) {
        setInput(input.slice(0, -1));
      }
    } else if (ch === "Enter") {
      if (input.length === 5) {
        handleSubmit();
      }
    } else if (input.length < 5) {
      ch = ch.toUpperCase();
      if (isLetter(ch)) {
        setInput(input + ch);
      }
    }
  };

  let board = [];

  for (var i = 0; i < 6; i++) {
    if (attempts.length > i + 1) {
      board.push(<Row attempt={attempts[i]} />);
    } else if (attempts.length === i + 1) {
      board.push(<Row attempt={{ response: input, color: [] }} />);
    } else {
      board.push(<Row attempt={{ response: "", color: [] }} />);
    }
  }

  return (
    <div onKeyDown={(e) => handler(e)} tabIndex={0}>
      <div className="game-board">{board}</div>
      <Keyboard />
    </div>
  );
};

export default Game;