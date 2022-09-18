let curCards;
let ptr = 0;

const setPrompt = val => {
  const prompt = document.getElementById("prompt");
  prompt.innerHTML = val;
};

const setCards = () => {
  const cardsEl = document.getElementById("cards");
  curCards = cardsEl.value;
  cardsEl.value = "";
  curCards = curCards.split("\n").map(line => {
    const [term, definition] = line.split("	");
    return { term, definition };
  });
  curCards.sort(() => Math.random() - 0.5);
  ptr = 0;
  setPrompt(curCards[ptr].definition);
};

const guess = () => {
  const guessEl = document.getElementById("guess");
  const guess = guessEl.value;
  guessEl.value = "";
  if (guess === curCards[ptr].term) {
    setPrompt("Correct!");
  } else {
    setPrompt(`Incorrect; answer was ${curCards[ptr].term}`);
  }
  setTimeout(newCard, 1000);
};

const newCard = () => {
  ptr += 1;
  setPrompt(curCards[ptr].definition);
};
