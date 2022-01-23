import {getGameData} from "../utils/apiHelpers";
import {shuffleArray} from "../utils/utils";


function Game() {
  const gameData = getGameData()
  let clickedElements: Array<String> = [];

  const getElements = () => {
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

  const elementClicked = (element: String) =>{
    clickedElements.push(element);
    console.log(element, clickedElements)
  }

  console.log(getElements())

  return (
    <div className="App">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-center font-bold text-5xl mb-4">
          {gameData.question}
        </h1>
        <div className="min-w-[70vw] min-h-[70vh] border-2 border-dashed border-gray-500">
          <div className="grid grid-cols-10 grid-rows-6 gap-4 m-5">
            {
              getElements().map((word, index) => {
                return (<button
                  key={index}
                  className={`min-h-[3vh] hover:text-cyan-500 text-2xl ${clickedElements.includes(word) && 'text-cyan-500'}`}
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
            className="m-auto mt-2 p-2 pl-5 pr-5 border-2 border-cyan-500 rounded-md text-cyan-500 w-fit
                  hover:border-cyan-700 hover:text-cyan-700 transition-all font-bold text-2xl"
          >FINISH GAME
          </button>
        </div>
      </div>
    </div>
  )
}

export default Game
