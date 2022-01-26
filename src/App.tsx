import './App.css'
import Game from "./views/Game";
import { Routes, Route, Link } from "react-router-dom";
import MainPage from "./views/MainPage";
import Leaderboard from "./views/Leaderboard";
import {useState} from "react";

function App() {
  const [playerName, setPlayerName] = useState("")
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage playerName={playerName} setPlayerName={setPlayerName}/>} />
        <Route path="game" element={<Game setScore={setScore}/>} />
        <Route path="leaderboard" element={<Leaderboard username={playerName} score={score}/>} />
      </Routes>
    </div>
  )
}

export default App
