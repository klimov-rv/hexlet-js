import _ from 'lodash';

export default function countWords(sentense) {
  const wordsFromSentense = {};
  const arSentense = sentense.split(' ');
  if (arSentense.length > 1) {
    console.log(arSentense);
    for (let i = 0; i < arSentense.length; i += 1) {
      const currWord = arSentense[i].toLowerCase();
      if (_.has(wordsFromSentense, currWord)) {
        wordsFromSentense[currWord] += 1;
      } else {
        wordsFromSentense[currWord] = 1;
      }
    }
  }
  return wordsFromSentense;
}
