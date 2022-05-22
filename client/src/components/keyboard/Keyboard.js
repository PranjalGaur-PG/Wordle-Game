import React from "react";
import "./Keyboard.scss";

const Keyboard = ({ handler }) => {
  return (
    <div>
      <div className="keyboard-cont">
        <div className="first-row">
          <button className="keyboard-button" onClick={() => handler("q")}>
            q
          </button>
          <button className="keyboard-button" onClick={() => handler("w")}>
            w
          </button>
          <button className="keyboard-button" onClick={() => handler("e")}>
            e
          </button>
          <button className="keyboard-button" onClick={() => handler("r")}>
            r
          </button>
          <button className="keyboard-button" onClick={() => handler("t")}>
            t
          </button>
          <button className="keyboard-button" onClick={() => handler("y")}>
            y
          </button>
          <button className="keyboard-button" onClick={() => handler("u")}>
            u
          </button>
          <button className="keyboard-button" onClick={() => handler("i")}>
            i
          </button>
          <button className="keyboard-button" onClick={() => handler("o")}>
            o
          </button>
          <button className="keyboard-button" onClick={() => handler("p")}>
            p
          </button>
        </div>
        <div className="second-row">
          <button className="keyboard-button" onClick={() => handler("a")}>
            a
          </button>
          <button className="keyboard-button" onClick={() => handler("s")}>
            s
          </button>
          <button className="keyboard-button" onClick={() => handler("d")}>
            d
          </button>
          <button className="keyboard-button" onClick={() => handler("f")}>
            f
          </button>
          <button className="keyboard-button" onClick={() => handler("g")}>
            g
          </button>
          <button className="keyboard-button" onClick={() => handler("h")}>
            h
          </button>
          <button className="keyboard-button" onClick={() => handler("j")}>
            j
          </button>
          <button className="keyboard-button" onClick={() => handler("k")}>
            k
          </button>
          <button className="keyboard-button" onClick={() => handler("l")}>
            l
          </button>
        </div>
        <div className="third-row">
          <button
            className="keyboard-button"
            onClick={() => handler("Backspace")}
          >
            Del
          </button>
          <button className="keyboard-button" onClick={() => handler("z")}>
            z
          </button>
          <button className="keyboard-button" onClick={() => handler("x")}>
            x
          </button>
          <button className="keyboard-button" onClick={() => handler("c")}>
            c
          </button>
          <button className="keyboard-button" onClick={() => handler("v")}>
            v
          </button>
          <button className="keyboard-button" onClick={() => handler("b")}>
            b
          </button>
          <button className="keyboard-button" onClick={() => handler("n")}>
            n
          </button>
          <button className="keyboard-button" onClick={() => handler("m")}>
            m
          </button>
          <button className="keyboard-button" onClick={() => handler("Enter")}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;