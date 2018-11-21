function createWordsArray(wordSubject) {

  const words_computer = require('./words-computer.js')
  const words_biology = require('./words-biology.js')
  const words_chemistry = require('./words-chemistry.js')
  const words_physics = require('./words-physics.js')
  let words = []

  wordSubject = wordSubject.toLowerCase()
  console.log('wordSubject:', wordSubject)
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

  console.log('function.js/createWordsArray/words:', words)
  return words
}

module.exports = {
  createWordsArray: createWordsArray
}