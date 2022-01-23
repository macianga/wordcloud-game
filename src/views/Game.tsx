import {getGameData} from "../utils/apiHelpers";
import {shuffleArray} from "../utils/utils";
import {useState} from "react";


function Game() {

  const [selectedElements, setSelectedElements] = useState<Array<String>>([]);
  const [question, setQuestion] = useState("")

  const getElements = () => {
    const gameData = getGameData()
    const cols = 12;
    const rows = 12;
    let elements: String[] = [];
    elements = elements.concat(gameData.all_words);
    const totalNoElements = cols * rows - elements.length
    for (let i = 0; i < totalNoElements; i++) {
      elements.push("")
    }
    return shuffleArray(elements)
  }

  const elementClicked = (element: String) => {
    if (!element) return;

    if (selectedElements.includes(element)) {
      setSelectedElements(selectedElements.filter((el: String) => {
        return el !== element
      }));
    } else {
      setSelectedElements(selectedElements.concat([element]));
    }
  }

  const finishGame = () => {
    console.log(selectedElements)
  }


  const [elements, setElements] = useState<Array<String>>(getElements());

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-center font-bold text-5xl mb-4">
          {question}
        </h1>
        <div className="min-w-[70vw] min-h-[70vh] border-2 border-dashed border-gray-500">
          <div className="grid grid-cols-10 grid-rows-6 gap-4 m-5">
            {
              elements.map((word, index) => {
                return (<button
                  key={index}
                  className={`min-h-[3vh] hover:text-cyan-500 transition-all text-2xl ${selectedElements.includes(word) && 'text-cyan-600'}`}
                  onClick={() => elementClicked(word)}
                >
                  {word}
                </button>)
              })
            }
          </div>
        </div>
        <div>
          <button
            className="m-auto mt-2 p-2 pl-5 pr-5 border-2 border-cyan-600 rounded-md text-cyan-600 w-fit
                  hover:border-cyan-500 hover:text-cyan-500 transition-all font-bold text-2xl"
            onClick={finishGame}
          >FINISH GAME
          </button>
        </div>
      </div>
    </div>
  )
}

export default Game
