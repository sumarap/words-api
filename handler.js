'use strict'

module.exports.getWord = async (event, context, callback) => {

  const MAX_WORDS = 5 // Maximum number of words returned
  const DEFAULT_WORDS = 1 // If no query param for words returned default to 1
  const DEFAULT_SUBJECT = 'all' // If no query param for subject, return 'all'

  const {
    createWordsArray, // Creates the master list of words we'll pick from
    generateWord // Picks a word at random from the list created (above)
  } = require('./utils/functions')

  let wordArr = [] // Array to hold words that we include in our response
  let wordCount // Number of words requested
  let wordSubject // Requested word subject/topic

  // Check if the wordCount query parameter was passed
  // If not, then set wordCount to DEFAULT_WORDS
  if (
    event.queryStringParameters &&
    event.queryStringParameters.hasOwnProperty('wordCount')
  ) {
    wordCount = event.queryStringParameters.wordCount

    // Limit the number of words returned to MAX_WORDS
    if (wordCount > MAX_WORDS) {
      wordCount = MAX_WORDS
    }
  } else {
    wordCount = DEFAULT_WORDS
  }

  // Check if the wordSubject query parameter was passed
  if (
    event.queryStringParameters &&
    event.queryStringParameters.hasOwnProperty('wordSubject')
  ) {
    wordSubject = event.queryStringParameters.wordSubject
  } else {
    wordSubject = DEFAULT_SUBJECT
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