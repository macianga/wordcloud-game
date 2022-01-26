import { useNavigate } from 'react-router-dom';

type Props = {
  playerName: any,
  setPlayerName: any
}

function MainPage({playerName, setPlayerName}: Props) {
  const navigateTo = useNavigate();

  const startGame = () => {
    navigateTo('/game')
  }

  return (
    <div className="App">
      <div className="flex items-center justify-center min-h-screen pb-40">
        <div className="grid grid-cols-1">
          <h1 className="text-center font-bold text-5xl mb-4">
            Wordcloud game
          </h1>
          <input
            type="text"
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
            placeholder="Enter your nickname here..."
            className="border-2 border-gray-300 p-2 rounded-xl h-14"
          />
          <button
                  className="m-auto mt-2 p-2 pl-5 pr-5 border-2 border-cyan-500 rounded-md text-cyan-500 w-fit
                  hover:border-cyan-700 hover:text-cyan-700 transition-all font-bold"
                  onClick={startGame}
          >PLAY
          </button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
