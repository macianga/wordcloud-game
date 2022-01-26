import {getGameData} from "../utils/apiHelpers";
import {shuffleArray} from "../utils/utils";
import {useEffect, useState} from "react";


function Game() {
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

  const finishGame = () => {
    setGameFinished(true);
    // const score = selectedElements.reduce((accumulator, selectedElement)=>{
    //   const pointsAdded = goodWords.includes(selectedElement) ? 2 : -1;
    //   return accumulator + pointsAdded;
    // },0);
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
                  className={`min-h-[3vh] hover:text-cyan-500 transition-all text-2xl
                   ${!gameFinished && (isWordSelected(word) ? 'text-cyan-600' : 'text-black')}
                   ${gameFinished && isWordSelected(word) && (isWordGood(word) ? 'text-green-500' : 'text-red-500')}
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
              className="m-auto mt-2 p-2 pl-5 pr-5 border-2 border-cyan-600 rounded-md text-cyan-600 w-fit
                  hover:border-cyan-500 hover:text-cyan-500 transition-all font-bold text-2xl"
              onClick={finishGame}
            >FINISH GAME
            </button>
            :
            <button
              className="m-auto mt-2 p-2 pl-5 pr-5 border-2 border-cyan-600 rounded-md text-cyan-600 w-fit
                  hover:border-cyan-500 hover:text-cyan-500 transition-all font-bold text-2xl"
            >SEE YOUR SCORE
            </button>
          }
        </div>
      </div>
    </div>
  )
}

export default Game
