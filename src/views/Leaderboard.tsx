import {Link} from "react-router-dom";
import {useEffect} from "react";
import {saveScore} from "../utils/apiHelpers";


type Props = {
  username: string,
  score: number,
}

function Leaderboard({username, score}: Props) {

  useEffect(() => {
    saveScore(username, score);
  }, []);

  const getScoreMessage = () => {
    if (score < 1) {
      return "I mean... It's fine";
    }
    if (score < 3) {
      return "Okay you goin somewhere 🚀";
    }
    if (score < 5) {
      return "Nice nice, keep going ;)";
    }
    if (score < 8) {
      return "How did you? Okay nice";
    }
  }

  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen pb-40">
        <div className="grid grid-cols-1">
          <span className="text-center font-bold text-5xl mb-4">
            Congratulations, {username}!
          </span>
          <span className="text-center text-4xl mb-4">
            Your score:
          </span>
          <span className="text-center text-4xl mb-4 text-cyan-500">
            ✨{score} points✨
          </span>
          <span className="text-center text-xl mb-4 text-purple-600">
            {getScoreMessage()}
          </span>
          <Link
            className="m-auto mt-2 p-2 pl-5 pr-5 border-2 border-cyan-600 rounded-md text-cyan-600 w-fit
                  hover:border-cyan-500 hover:text-cyan-500 transition-all font-bold text-2xl"
            to={"/"}
          >PLAY AGAIN
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
