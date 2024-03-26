import { writable, derived, get } from 'svelte/store';
import countries from './countries';

interface Flag {
  name: string;
  imageUrl: string;
}
function shuffleArray(array: Flag[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const flagsData: Flag[] = Object.entries(countries).map(([twoLetterCode, countryData]) => {
  if (!countryData.name) {
    throw new Error(`Country data for ${twoLetterCode} does not have a name`);
  }

  return {
    name: countryData.name[0],
    imageUrl: `src/assets/flags_svg/${twoLetterCode.toLowerCase()}.svg`,
  };
});

const flags = writable(flagsData);
const currentFlagIndex = writable(0);
const score = writable(0);
const currentFlag = derived([flags, currentFlagIndex], ([$flags, $currentFlagIndex]) => $flags[$currentFlagIndex]);
const lives = writable(3); // Add this line

shuffleArray(get(flags));

export const gameOver = writable(false);

export function checkAnswer(answer: string): boolean {
  const isCorrect = answer.toLowerCase() === get(currentFlag).name.toLowerCase();

  if (isCorrect) {
    score.update(value => value + 1);
    currentFlagIndex.update(value => value + 1);
  } else {
    lives.update(value => value - 1);
    if (get(lives) === 0) { // Use get(lives) instead of $lives
      gameOver.set(true);
    }
  }

  return isCorrect;
}

export function restartGame(): void {
  location.reload()
}


export { flags, currentFlag, score, lives }; // Export lives