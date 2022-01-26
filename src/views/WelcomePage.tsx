import {useNavigate} from 'react-router-dom';
import {useState} from "react";

type Props = {
  playerName: any,
  setPlayerName: any
}

function WelcomePage({playerName, setPlayerName}: Props) {
  const navigateTo = useNavigate();
  const [validationError, setValidationError] = useState("")

  const validateInput = (input: string, allowNonAlphanumeric: boolean = true) => {
    if (input.length < 3) {
      setValidationError("Nickname can't be less then 3 characters long :(");
      return false;
    }
    if (!allowNonAlphanumeric && !/^[a-z0-9]+$/i.test(input)) {
      setValidationError("Don't try to be so funky with those characters!");
      return false;
    }
    return true;
  }

  const startGame = () => {
    if (!validateInput(playerName))
      return;

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
            className={`border-2 ${validationError ? 'border-red-600' : 'border-gray-300'} p-2 rounded-xl h-14`}
          />
          <button
            className="m-auto mt-2 p-2 pl-5 pr-5 border-2 border-cyan-600 rounded-md text-cyan-600 w-fit
                  hover:border-cyan-500 hover:text-cyan-500 transition-all font-bold text-3xl"
            onClick={startGame}
          >PLAY
          </button>
          {validationError && <span className="text-red-600 mt-1">{validationError}</span>}
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
