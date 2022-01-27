import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getAllScores, saveScore} from "../utils/apiHelpers";


type UserGameType = {
  username: string,
  score: number,
}


function Leaderboard({username, score}: UserGameType) {
  const [scores, setScores] = useState<Array<UserGameType>>([])
  useEffect(() => {
    saveScore(username, score);

    getAllScores((data: any) => {
      const dictData = data.val();
      const valuesArray: Array<UserGameType> = Object.values(dictData);

      valuesArray.sort((el1, el2) => el2.score - el1.score)
      setScores(valuesArray);
    })
  }, []);

  const getScoreMessage = () => {
    if (score < 1)
      return "I mean... It's fine";
    if (score < 3)
      return "Okay you goin somewhere 🚀";
    if (score < 5)
      return "Nice nice, keep going ;)";
    if (score < 8)
      return "How did you? Okay nice";
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

          <table className="table-auto mt-10">
            <thead>
            <tr className="font-bold text-3xl">
              <th className="text-left">Player</th>
              <th className="text-right">Score</th>
            </tr>
            </thead>
            <tbody>
            {
              scores.map((game: UserGameType, index) => (
                <tr key={index} className={`text-xl border-t-[1px] border-purple-600`}>
                  <td>{game.username}</td>
                  <td className="text-right ">{game.score}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
