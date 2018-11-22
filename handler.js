'use strict'

module.exports.getWord = async (event, context, callback) => {
  const {
    createWordsArray, // Creates the master list of words we'll pick from
    generateWord // Picks a word at random from the list created (above)
  } = require('./utils/functions')

  let wordArr = [] // Array to hold words that we include in our response
  let wordCount // Number of words requested
  let wordSubject // Requested word subject/topic

  // Check if the wordCount query parameter was passed
  // If not default to 1
  if (
    event.queryStringParameters &&
    event.queryStringParameters.hasOwnProperty('wordCount')
  ) {
    wordCount = event.queryStringParameters.wordCount
  } else {
    wordCount = 1
  }

  // Check if the wordSubject query parameter was passed
  // if not default to 'all'
  if (
    event.queryStringParameters &&
    event.queryStringParameters.hasOwnProperty('wordSubject')
  ) {
    wordSubject = event.queryStringParameters.wordSubject
  } else {
    wordSubject = 'all'
  }

  // Create the word array (all, computer, biology, chemistry, physics)
  // This is the master word list form which we'll choose (wordCount) words
  let wordsArray = createWordsArray(wordSubject)

  // Get the words requested and push into the words array
  for (let i = 0; i < wordCount; i++) {
    // Get random word
    let word = generateWord(wordsArray)
    // TODO?: Sub-loop so we only add this word to the array if it's not already there
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