import React, { useEffect } from "react";
import "./Landing.scss";
import { useNavigate } from "react-router-dom";
import { createSession } from "../../api/wordleAPI";

const Landing = ({
  name,
  setName,
  setSession,
  loading,
  setLoading,
  setAlert,
  setAttempts,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    setSession(null);
    setName("");
    setAttempts([{ response: "", color: [] }]);
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const res = await createSession(name, setAlert);
    if (res) {
      setSession(res.session_id);
      console.log(res);

      navigate("/Game");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Welcome To Wordle</h1>
      <div className="container__item">
        <form className="form">
          <input
            type="text"
            className="form__field"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="button"
            className="btn btn--primary btn--inside "
            onClick={handleClick}
          >
            START GAME
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing;