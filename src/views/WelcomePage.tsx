import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import DarkmodeSwitch from "../components/DarkmodeSwitch";

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
    <div className="dark:bg-darkmode-background darkmode-transition">
      <DarkmodeSwitch/>
      <div className="flex items-center justify-center min-h-screen pb-40">
        <div className="grid grid-cols-1">
          <h1 className="text-center font-bold text-5xl mb-4 dark:text-darkmode-secondary">
            Wordcloud game
          </h1>
          <input
            type="text"
            value={playerName}
            onChange={e => setPlayerName(e.target.value)}
            placeholder="Enter your nickname here..."
            className={`border-2 ${validationError ? 'border-danger' : 'border-gray-300'} p-2 rounded-xl h-14`}
          />
          <button
            className="btn m-auto mt-2"
            onClick={startGame}
          >PLAY
          </button>
          {validationError && <span className="text-danger mt-1 text-center">{validationError}</span>}
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
