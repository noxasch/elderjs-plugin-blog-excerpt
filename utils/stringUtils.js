
/**
 * This function remove list, headings and special symbol
 *
 * @param {string} inputString - html string
 * @return {string} cleaned html string 
 */
function cleanString(inputString) {
  let result = inputString.replace(/\_/g, ''); // remove underscore
  result = result.replace(/\`/g, ''); // remove ` ticks
  result = result.replace(/\!\[.*\)/g, ''); // remove images
  result = result.replace(/\[.*\)/g, ''); // remove links
  result = result.replace(/{{.*}}/g, '')// remove shortcodes
  result = result.replace(/\s{2,}/g, ' '); // remove extra spaces
  result = result.replace(/\\/g, ' '); // remove forward slashes symbol
  return result;
}

function removeHeadings(inputString) {
  let result = inputString.replace(/(\#.+)/g, ''); // remove headings
  return result;
}

function removeListItem(inputString) {
  let result = inputString.replace(/(\*.+)/g, ''); // remove list
  return result;
}

/**
 * This function remove codeblock from string line by line
 *
 * @param {string} inputString - html string
 * @param {Array<String>} codeblocks - Array of code
 * @return {string} html string with code removed
 */
function removeCodeBlock(inputString, codeblocks) {
  let result = inputString.replace(/`{1,}/g, ''); // remove code block
  codeblocks.forEach((code) => {
    result = result.replace(code, ''); // remove code per line
  });
  return result;
}

module.exports = { removeCodeBlock, cleanString, removeHeadings, removeListItem };
