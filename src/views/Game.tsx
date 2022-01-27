import {getGameData} from "../utils/apiHelpers";
import {shuffleArray} from "../utils/utils";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

type Props = {
  setScore: any,
}


function Game({setScore}: Props) {
  const [selectedElements, setSelectedElements] = useState<Array<String>>([]);
  const [question, setQuestion] = useState("")
  const [goodWords, setGoodWords] = useState<Array<String>>([]);
  const [displayElements, setDisplayElements] = useState<Array<String>>([]);
  const [gameFinished, setGameFinished] = useState(false);


  const computeWordElements = (allWords: Array<String>): Array<String> => {
    const cols = 12;
    const rows = 6;

    let elements: String[] = [];
    elements = elements.concat(allWords);
    const totalNoElements = cols * rows - elements.length
    for (let i = 0; i < totalNoElements; i++) {
      elements.push("")
    }
    return shuffleArray(elements)
  }

  const elementClicked = (element: String) => {
    if (!element || gameFinished) return;

    if (selectedElements.includes(element)) {
      setSelectedElements(selectedElements.filter((el: String) => {
        return el !== element
      }));
    } else {
      setSelectedElements(selectedElements.concat([element]));
    }
  }

  const calculateScore = () =>{
    // (liczba zaznaczonych poprawnych odpowiedzi * 2) - (liczba zaznaczonych błędnych odpowiedzi +
    // liczba niezaznaczonych poprawnych odpowiedzi).
    const goodWordsTemp = [...goodWords]
    let score = selectedElements.reduce((accumulator, selectedElement) => {
      const pointsEarned = goodWords.includes(selectedElement) ? 2 : -1;
      if(goodWords.includes(selectedElement)){
        goodWordsTemp.splice(goodWordsTemp.indexOf(selectedElement), 1);
      }
      return accumulator + pointsEarned;
    }, 0);
    score -= goodWordsTemp.length;
    return score;
  }

  const finishGame = () => {
    setGameFinished(true);
    setScore(calculateScore());
  }

  const isWordSelected = (word: String) => {
    return selectedElements.includes(word);
  }

  const isWordGood = (word: String) => {
    return goodWords.includes(word);
  }

  useEffect(() => {
    const gameData = getGameData();
    setQuestion(gameData.question);
    setGoodWords(gameData.good_words)
    setDisplayElements(computeWordElements(gameData.all_words));
  }, []);


  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-center font-bold text-5xl mb-4">
          {question}
        </h1>
        <div className="min-w-[70vw] min-h-[70vh] border-2 border-dashed border-gray-500">
          <div className="grid grid-cols-10 grid-rows-6 gap-4 m-5 min-h-[65vh] min-w-[75vw]">
            {
              displayElements.map((word, index) =>
                (<button
                  key={index}
                  className={`min-h-[3vh] ${!gameFinished && "hover:text-cyan-500"} transition-all text-2xl select-none
                   ${!gameFinished && (isWordSelected(word) ? 'text-cyan-600' : 'text-black')}
                   ${gameFinished && isWordSelected(word) && (isWordGood(word) ? 'text-green-500' : 'text-red-500')}
                   ${(!word || gameFinished) && "pointer-events-none"}
                   `}
                  onClick={() => elementClicked(word)}
                >
                  {word}
                </button>)
              )
            }
          </div>
        </div>
        <div>
          {!gameFinished ?
            <button
              className="btn m-auto mt-2"
              onClick={finishGame}
            >FINISH GAME
            </button>
            :
            <Link
              className="btn block m-auto mt-2"
              to={"/leaderboard"}
            >SEE YOUR SCORE
            </Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Game
