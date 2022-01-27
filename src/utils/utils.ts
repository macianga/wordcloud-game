export const shuffleArray = (array: Array<String>) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const applyCurrentTheme = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const toggleDarkMode = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage)
    && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.theme = 'light'
  } else {
    localStorage.theme = 'dark'
  }
  applyCurrentTheme();
}