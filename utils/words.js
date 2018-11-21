///////////////////////////////////////////////////////////
//
// TODO: Add support for npm "unique-random" instead of
//       using Math.random()
// TODO: Add support for accessing a dynamodb
// TODO: Add support for (multiple) word tags (computer, biology, etc)
// 
///////////////////////////////////////////////////////////
module.exports = {
  generateWord: (wordsArray) => {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    // Get random index value
    const index = getRandomInt(wordsArray.length - 1);

    return wordsArray[index];
  }
}