import './App.css'
import Game from "./views/Game";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./views/MainPage";
import Leaderboard from "./views/Leaderboard";
import {useReducer, useState} from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="game" element={<Game />} />
        <Route path="leaderboard" element={<Leaderboard username={playerName} score={12}/>} />
      </Routes>
    </div>
  )
}

export default App
