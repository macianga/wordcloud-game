import Game from "./views/Game";
import {Routes, Route, BrowserRouter, HashRouter} from "react-router-dom";
import WelcomePage from "./views/WelcomePage";
import Leaderboard from "./views/Leaderboard";
import {useState} from "react";


function App() {
  const [playerName, setPlayerName] = useState("")
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <HashRouter basename={"/"}>
          <Routes>
            <Route path="/" element={<WelcomePage playerName={playerName} setPlayerName={setPlayerName}/>}/>
            <Route path="game" element={<Game setScore={setScore}/>}/>
            <Route path="leaderboard" element={<Leaderboard username={playerName} score={score}/>}/>
          </Routes>
        </HashRouter>
      </BrowserRouter>
    </div>
  )
}

export default App
