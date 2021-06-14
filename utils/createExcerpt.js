/**
 * This function create excerpt from inputString
 * @param {string} inputString
 * @param {number} maxWordsCount
 * @param {string} stringEnd
 * @return {string} excerpt string
 */
function createExcerpt(inputString, maxWordsCount, stringEnd) {
  const excerptArray = inputString.split(/[ \.,]+/);
  let lastWord = excerptArray.length > maxWordsCount ? excerptArray[maxWordsCount - 1] : excerptArray[excerptArray.length - 1];
  lastWord = ` ${lastWord} `;
  const excerpt = `${inputString.substr(0, inputString.indexOf(lastWord) + lastWord.length)}${stringEnd}`;

  return excerpt;
}

module.exports = createExcerpt;