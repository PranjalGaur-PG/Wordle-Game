import React, { useEffect, useState } from "react";
import Row from "../../components/row/Row";
import Keyboard from "../../components/keyboard/Keyboard";
import { addAttempt, giveup } from "../../api/wordleAPI";
import "./Game.scss";

const Game = ({
  attempts,
  setAttempts,
  session,
  loading,
  setLoading,
  setSuccess,
  setAlert,
  setGiveup,
  setWord,
}) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    document.getElementById("game").focus();
  }, []);

  function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

  const handleGameOver = async () => {
    const word = await giveup(session, setAlert);
    setWord(word);
    setGiveup(true);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await addAttempt(input, session, setAlert);
    if (res) {
      if (res.success) {
        setSuccess(true);
      }
      const attempt = res.attempt;
      let temp_attempts = attempts;
      temp_attempts[attempts.length - 1] = attempt;
      setAttempts([...temp_attempts, { response: "", color: [] }]);

      if (attempts.length === 6) {
        handleGameOver();
      }
    }
    setInput("");
    setLoading(false);
    console.log(attempts);
  };

  const handler = (e) => {
    var ch = e;

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
    <div
      onKeyDown={(e) => handler(e.key)}
      tabIndex={0}
      className="game"
      id="game"
      onClick={() => console.log("click")}
    >
      <div className="game-board">{board}</div>

      <Keyboard handler={handler} />

      <button
        type="button"
        className="btn btn-danger giveupbtn"
        onClick={handleGameOver}
      >
        GIVE UP
      </button>
    </div>
  );
};

export default Game;
