type Props = {
  username: string,
  score: number,
}

function Leaderboard({username, score}: Props) {
  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen pb-40">
        <div className="grid grid-cols-1">
          <h1 className="text-center font-bold text-5xl mb-4">
            Congratulations, {username}!
          </h1>
          <h1 className="text-center text-4xl mb-4">
            Your score:
          </h1>
          <h1 className="text-center text-4xl mb-4 text-cyan-500">
            {score} points
          </h1>
          <button
                  className="m-auto mt-2 p-2 pl-5 pr-5 border-2 border-cyan-500 rounded-md text-cyan-500 w-fit
                  hover:border-cyan-700 hover:text-cyan-700 transition-all text-xl font-bold"
          >PLAY AGAIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Leaderboard
