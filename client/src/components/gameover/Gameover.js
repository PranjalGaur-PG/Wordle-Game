import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Gameover.scss";

const Gameover = ({ giveup, setGiveup, word }) => {
  const navigate = useNavigate();

  if (giveup) {
    return (
      <div className="modal-dialog animate__animated animate__backInDown head_giveup">
        <div className="modal-content">
          <div className="modal-header">
            <h1>Game Over !!</h1>
          </div>
          <div className="modal-body">
            <h3 className="text-center"> Word : {word}</h3>
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_nwyegy0h.json"
              background="transparent"
              speed="1"
              style={{ width: "80%", height: "200px", margin: "auto" }}
              loop
              autoplay
            ></lottie-player>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-dark m-auto d-block"
              onClick={() => {
                setGiveup(false);
                navigate("/");
              }}
            >
              Home Page
            </button>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default Gameover;