import {isDarkModeSet, toggleDarkMode} from "../utils/utils";
import {useState} from "react";

function DarkmodeSwitch() {
  const [isToggled, setIsToggled] = useState(!isDarkModeSet());

  const toggleClass = 'transform translate-x-6';

  return (
    <div className="absolute top-2 right-2">
      <div
        className="w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 cursor-pointer"
        onClick={() => {
          setIsToggled(!isToggled);
          toggleDarkMode();
        }}
      >
        <div
          className={`bg-white dark:bg-darkmode-secondary w-6 h-6 rounded-full shadow-md transition 
                      ${!isToggled && toggleClass}`}
        >
          <img src="/src/icons/icon-flashlight.png" className="max-w-6 max-h-6"/>
        </div>
      </div>
    </div>
  )
}

export default DarkmodeSwitch
