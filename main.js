let curCards;
let ptr = 0;
let incorrectItems = [];

const setPrompt = val => {
  const prompt = document.getElementById("prompt");
  prompt.innerText = val;
};

const displayIncorrect = () => {
  let text = "Incorrect terms:";
  for (item of incorrectItems) {
    text += `\n${item.term}: ${item.definition}`;
  }
  const wrongEl = document.getElementById("wrong");
  wrongEl.innerText = text;
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
    incorrectItems.push(curCards[ptr]);
    displayIncorrect();
  }
  setTimeout(newCard, 1000);
};

const newCard = () => {
  if (ptr === curCards.length - 1) {
    ptr = 0;
    incorrectItems.sort(() => Math.random() - 0.5);
    curCards = incorrectItems;
    incorrectItems = [];
    setPrompt(curCards[ptr].definition);
    displayIncorrect();
  } else {
    ptr += 1;
    setPrompt(curCards[ptr].definition);
  }
};
