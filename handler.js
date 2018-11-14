'use strict'

module.exports.getWord = async (event, context, callback) => {
  // Retrieve words module for getting words from the database
  const words = require('./utils/words')

  let wordArr = [] // Array to hold words
  let wordCount // Number of words requested
  let wordSubject // Requested word subject/topic

  // Check if the wordCount query parameter was passed
  if (
    event.queryStringParameters &&
    event.queryStringParameters.hasOwnProperty('wordCount')
  ) {
    wordCount = event.queryStringParameters.wordCount
  } else {
    wordCount = 1
  }

  // Check if the wordSubject query parameter was passed
  if (
    event.queryStringParameters &&
    event.queryStringParameters.hasOwnProperty('wordSubject')
  ) {
    wordSubject = event.queryStringParameters.wordSubject
  } else {
    wordSubject = 'all'
  }

  // Get the words requested and push into the words array
  for (let i = 0; i < wordCount; i++) {
    // Get random word
    let word = words.generateWord()
    // TODO: Sub-loop so we only add this word to the array if it's not already there
    wordArr.push(word)
  }

  const response = {
    statusCode: 200,
    // This header required for CORS
    // Set it to hangman.sumarap.com to ONLY allow access from their
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      words: wordArr
    })
  }

  callback(null, response)
}
