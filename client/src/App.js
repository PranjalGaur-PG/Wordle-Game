import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Game from "./pages/Game/Game";
import Navbar from "./components/navbar/Navbar";
import Spinner from "./components/spinner/Spinner";
import { useState } from "react";
import Alert from "./components/alert/Alert";
import Success from "./components/success/Success";
import Gameover from "./components/gameover/Gameover";
import Footer from "./components/footer/Footer";

function App() {
  const [alert, setAlert] = useState(null);
  const [success, setSuccess] = useState(false);
  const [giveup, setGiveup] = useState(false);
  const [name, setName] = useState("");
  const [word, setWord] = useState("");
  const [session, setSession] = useState("");
  const [loading, setLoading] = useState(false);
  const [attempts, setAttempts] = useState([{ response: "", color: [] }]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Alert alert={alert} setAlert={setAlert} />
        <Spinner loading={loading} />
        <Success success={success} setSuccess={setSuccess} />
        <Gameover giveup={giveup} setGiveup={setGiveup} word={word} />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                name={name}
                setName={setName}
                setSession={setSession}
                loading={loading}
                setLoading={setLoading}
                setAlert={setAlert}
                setAttempts={setAttempts}
              />
            }
          />
          <Route
            path="/game"
            element={
              <Game
                session={session}
                attempts={attempts}
                setAttempts={setAttempts}
                loading={loading}
                setLoading={setLoading}
                setAlert={setAlert}
                setSuccess={setSuccess}
                setGiveup={setGiveup}
                setWord={setWord}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;