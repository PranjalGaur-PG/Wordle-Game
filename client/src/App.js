import React from 'react';
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Game from "./pages/Game/Game";
import Navbar from "./components/navbar/Navbar";
import { useState } from 'react';

function App() {

  const [name, setName] = useState("");
  const [session, setSession] = useState("");
  const [attempts, setAttempts] = useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing name = {name} setName = {setName} setSession = {setSession} />} />
          <Route path="/game" element={<Game session = {session} attempts = {attempts} setAttempts = {setAttempts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
