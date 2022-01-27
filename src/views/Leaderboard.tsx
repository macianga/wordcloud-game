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

  const getScoreMessage = (): string => {
    if (score < 1)
      return "I mean... It's fine";
    if (score < 3)
      return "Okay you goin somewhere 🚀";
    if (score < 6)
      return "Nice nice, keep going ;)";

    return "How did you...? Okay nice";
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
            className="btn m-auto mt-2"
            to={"/"}
          >PLAY AGAIN
          </Link>
          <div className="flex flex-row justify-center">
            {scores.length ?
              (
                <table className="table-auto mt-10 max-w-2xl">
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
              )
              :
              (<div className=" mt-16 w-20 h-20 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"/>)
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Leaderboard
