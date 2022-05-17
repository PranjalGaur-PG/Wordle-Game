const axios = require("axios");

const fetchWord = async () => {
    try {
        const result = await axios.get('https://random-word-api.herokuapp.com/word?length=5');
        const word = result[0];
        return word;
    } catch(err) {
        throw err;
    }
}

module.exports = fetchWord;