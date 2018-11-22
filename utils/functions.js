//////////////////////////////////////////////////////////////////////////////
// Create a master word array from which we'll choose a number of words
// to include in our response. If the user has selected a subject
// we'll include only words in that subject's array (biology, chemistry, etc)
// Otherwise we'll include ALL words
//////////////////////////////////////////////////////////////////////////////
const createWordsArray = (wordSubject) => {

  const words_computer = require('./words-computer.js')
  const words_biology = require('./words-biology.js')
  const words_chemistry = require('./words-chemistry.js')
  const words_physics = require('./words-physics.js')
  let words = []

  wordSubject = wordSubject.toLowerCase()
  switch (wordSubject) {
    case 'computer':
      words = words.concat(words_computer)
      break
    case 'biology':
      words = words.concat(words_biology)
      break
    case 'chemistry':
      words = words.concat(words_chemistry)
      break
    case 'physics':
      words = words.concat(words_physics)
      break
    default:
      wordSubject = 'all'
      words = words.concat(words_computer)
      words = words.concat(words_biology)
      words = words.concat(words_chemistry)
      words = words.concat(words_physics)
      break
  }

  return words
}

///////////////////////////////////////////////////////////
// TODO: Add support for npm "unique-random" instead of
//       using Math.random()
// TODO: Add support for accessing a dynamodb
///////////////////////////////////////////////////////////
const generateWord = (wordsArray) => {

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Get random index value
  const index = getRandomInt(wordsArray.length - 1);

  return wordsArray[index];
}

///////////////////////////////////////////////////////////
module.exports = {
  createWordsArray: createWordsArray,
  generateWord: generateWord
}