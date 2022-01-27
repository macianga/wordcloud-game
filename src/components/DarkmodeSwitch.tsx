import {toggleDarkMode} from "../utils/utils";

function DarkmodeSwitch() {
  return (
    <div>
      <button
        className="btn m-auto mt-2 absolute top-1 right-3"
        onClick={toggleDarkMode}
      >PLAY
      </button>
    </div>
  )
}

export default DarkmodeSwitch
