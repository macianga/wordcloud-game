import './App.css'
import Game from "./views/Game";
import { Routes, Route} from "react-router-dom";
import WelcomePage from "./views/WelcomePage";
import Leaderboard from "./views/Leaderboard";
import {useState} from "react";

function App() {
  const [playerName, setPlayerName] = useState("")
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage playerName={playerName} setPlayerName={setPlayerName}/>} />
        <Route path="game" element={<Game setScore={setScore}/>} />
        <Route path="leaderboard" element={<Leaderboard username={playerName} score={score}/>} />
      </Routes>
    </div>
  )
}

export default App
