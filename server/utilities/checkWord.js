const axios = require("axios");

const checkWord = async (response) => {
    try {
        const result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${response}`);
        const word = result.data;
        // console.log(word);
        return Array.isArray(word);
    } catch(err) {
        throw err;
    }
}

module.exports = checkWord;