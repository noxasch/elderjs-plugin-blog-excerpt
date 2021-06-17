/**
 * This function create excerpt from inputString
 * @param {string} inputString
 * @param {number} maxWordsCount
 * @return {string} excerpt string
 */
function createExcerpt(inputString, maxWordsCount) {
  const excerptArray = inputString.split(/[ ]+/);
  const excerpt = (excerptArray.length > maxWordsCount) ? `${excerptArray.slice(0, maxWordsCount).join(' ')}...`
    : `${excerptArray.slice(0, excerptArray.length - 1).join(' ')}`;
  return excerpt;
}

module.exports = createExcerpt;
