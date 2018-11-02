///////////////////////////////////////////////////////////
//
// TODO: Add support for npm "unique-random" instead of
//       using Math.random()
// TODO: Add support for accessing a dynamodb
// TODO: Add support for (multiple) word tags (computer, biology, etc)
// 
///////////////////////////////////////////////////////////
module.exports = {
  generateWord: () => {

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    words = ['javascript', 'nodejs', 'c++', 'basic', 'fortran', 'cobal',
      'haskell', 'ada', 'pascal', 'c', 'c#', 'python', 'perl', 'go', 'swift',
      'ruby', 'java', 'abstraction', 'analysis', 'architecture', 'benchmark',
      'component', 'complexity', 'design', 'domain', 'engineering', 'extendability',
      'extensibility', 'feature', 'framework', 'functionality', 'heuristic', 'hypothesis',
      'implementation', 'inconsistency', 'integrity', 'invocation', 'iterative',
      'maintainability', 'metric', 'measurement', 'model', 'paradigm', 'pattern',
      'platform', 'framework', 'portability', 'reengineering', 'refactoring', 'refinement',
      'reflection', 'reliability', 'requirement', 'restructuring', 'reusable', 'robustness',
      'software', 'statistic', 'testing', 'traceability', 'transformation', 'usability',
      'variabilities', 'verifiability', 'viewpoint', 'ibm', 'microsoft', 'apple'
    ];

    // Get random index value
    const index = getRandomInt(words.length - 1);

    return words[index];
  }
}