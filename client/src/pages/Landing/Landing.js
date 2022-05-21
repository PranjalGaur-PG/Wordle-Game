import React from "react";
import "./Landing.scss";
import { useNavigate } from 'react-router-dom';
import { createSession } from "../../api/wordleAPI";

const Landing = ({ name, setName, setSession }) => {

  const navigate = useNavigate();

  const handleClick = async () => {

    const res = await createSession(name);
    setSession(res.session_id);
    console.log(res);

    navigate('/Game');

  }

  return (
    <div class="container">
      <h1>Welcome To Wordle</h1>
      <div class="container__item">
        <form class="form">
          <input type = "text" class="form__field" placeholder="Enter your Name" value={name} onChange = {e => setName(e.target.value)}/>
          <button type="button" class="btn btn--primary btn--inside " onClick={ handleClick }>
            START GAME
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing;