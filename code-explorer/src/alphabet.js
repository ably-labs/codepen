const phonetic = `alpha|bravo|charlie|delta|echo|foxtrot|golf|hotel|india|juliet|kilo|lima|mike|november|oscar|papa|quebec|romeo|sierra|tango|uniform|victor|whiskey|xray|yankee|zulu`;
const array = phonetic.split("|");

function shuffle(n = 2) {
    const shuffle = array.sort(() => Math.random() - 0.5);
    return shuffle.slice(0,n);
}

export default shuffle;
