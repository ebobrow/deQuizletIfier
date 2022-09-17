let curSet;
let curAnswer;

inputSet = () => {
    const setEl = document.getElementById("set");
    curSet = setEl.value;
    setEl.value = "";
    curSet = curSet.split("\n").map(line => {
        const [term, definition] = line.split("	");
        return { term: term, definition: definition };
    });
    console.log(curSet);
    const prompt = document.getElementById("prompt");
    prompt.innerHTML = curSet[0].definition;
    curAnswer = curSet[0].term;
}
