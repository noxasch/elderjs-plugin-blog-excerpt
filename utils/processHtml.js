const unified = require('unified');
const rehypeParse = require('rehype-parse');
const rehypeRemark = require('rehype-remark');
const stringify = require('remark-stringify');
const codeblock = require('remark-code-blocks');

function processHtml (htmlInput) {
  const processor = unified()
    .use(rehypeParse, { emitParseErrors: true, duplicateAttribute: false })
    .use(rehypeRemark)
    .use(stringify)
    .use(codeblock);
  return processor.processSync(htmlInput);
}

module.exports = processHtml;
