const getArrays = (word, response) => {

    function setCharAt(str, index, chr = "#") {
        if (index > str.length - 1) return str;
        return str.substring(0, index) + chr + str.substring(index + 1);
    }

    let guess = ["Grey", "Grey", "Grey", "Grey", "Grey"];

    for(var i=0; i<5; i++) {
        if(word[i] === response[i]) {
            guess[i] = "Green";
            word = setCharAt(word, i);
            response = setCharAt(response, i);
        }

    }

    for(var i=0; i<5; i++) {
        if(word[i] === '#') continue;
        else if(word.indexOf(response[i]) !== -1) {
            guess[i] = "Orange";
            // word[word.indexOf(response[i])] = '#';
            word = setCharAt(word, word.indexOf(response[i]));
        }

    }

    return guess;
}

module.exports = getArrays; 