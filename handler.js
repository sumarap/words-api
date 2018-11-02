'use strict';


module.exports.getWord = async (event, context, callback) => {

  // Get random word
  const words = require('./utils/words');
  const word = words.generateWord();

  const response = {
    statusCode: 200,
    // This header required for CORS 
    // Set it to hangman.sumarap.com to ONLY allow access from their
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      word: word
    }),
  };

  callback(null, response);

};