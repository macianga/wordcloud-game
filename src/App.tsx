import './App.css'
import Leaderboard from "./views/Leaderboard";

function App() {
  return (
    <div className="App">
      <Leaderboard username="john" score={100}/>
    </div>
  )
}

export default App
