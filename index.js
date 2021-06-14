const plugin = {
  name: 'elderjs-plugin-blog-excerpt',
  description: `[copy and paste the start of your readme]`,
  minimumElderjsVersion: "1.4.13", // you can leave blank. 
  init: (plugin) => { 
    return plugin;
  },
  hooks: [
    {
      hook: 'bootstrap',
      name: 'yourFirstHook',
      description: `A description of what this hook does.`,
      priority: 50,
      run: async ({ plugin, routes, data }) => {
        if ('markdown' in data || plugin.routes in data) {
          let articles = [];
          // if (plugin.routes in data) 
          // TODO: use bootstrap to generate excerpt that can be use in index page
        }
        return {
          plugin,
        };
      }
    },
    {
      hook: 'data',
      name: 'createExcerpt',
      description: 'wuuuuuu',
      priority: 50,
      run: ({ plugin, data, request, settings }) => {
        const unified = require('unified');
        const rehypeParse = require('rehype-parse');
        const rehypeRemark = require('rehype-remark');
        const stringify = require('remark-stringify');
        const codeblock = require('remark-code-blocks');
        const createExcerpt = require('./utils/createExcerpt');
        const { removeCodeBlock, cleanString, removeHeadings, removeListItem } = require('./stringUtils');


        if (plugin.routes.includes(request.route) && !request.slug.includes(request.route)) {
          const processor = unified()
            .use(rehypeParse, { emitParseErrors: true, duplicateAttribute: false })
            .use(rehypeRemark)
            .use(stringify)
            .use(codeblock);

          const result = processor.processSync(data.html);

          let cleanResult = result.contents;
          if (plugin.excludeCodeBlock) cleanResult = removeCodeBlock(result.contents, result.data.codeblocks._);
          if (plugin.excludeHeadings) cleanResult = removeHeadings(cleanResult);
          if (plugin.excludeListItem) cleanResult = removeListItem(cleanResult);
          cleanResult = cleanString(cleanResult);
          const excerpt = createExcerpt(cleanResult, plugin.maxWordsCount, plugin.stringEnd);
          data.excerpt = excerpt;
          return { data }
        }
      }
    },
  ],
  config: { // here is where you set the default configs for your plugin. These are merged with the configs found in the user's elder.config.js file.
    routes: [],
    maxWordsCount: 55,
    excludeHeadings: true,
    excludeCodeBlock: true,
    excludeListItem: true,
    stringEnd: '...',
  },
  anotherProp: {} // this will be available as a named export. :) Useful for exposing plugin internals. 
};

module.exports = plugin;
