const plugin = {
  name: 'elderjs-plugin-blog-excerpt',
  description: `Easily generate post excerpt from your markdown blog post`,
  minimumElderjsVersion: "1.4.13", // you can leave blank. 
  init: (plugin) => { 
    return plugin;
  },
  hooks: [
    {
      hook: 'bootstrap',
      name: 'createExcerptHook',
      description: `Create post excerpt`,
      priority: 50,
      run: ({ plugin, data, settings }) => {
        const createExcerpt = require('./utils/createExcerpt');
        const processHtml = require('./utils/processHtml');
        const { removeCodeBlock, cleanString, removeHeadings, removeListItem } = require('./utils/stringUtils');
        const hasPluginMarkdown = '@elderjs/plugin-markdown' in settings.plugins;
        const routesList = plugin.config.routes;
        if (hasPluginMarkdown) {
          routesList.forEach((route) => {
            const posts = data.markdown[route];
            posts.forEach((post) => {
              const result = processHtml(post.html);
              let cleanResult = result.contents;
              if ('_' in result.data.codeblocks && plugin.config.excludeCodeBlock)
                cleanResult = removeCodeBlock(cleanResult, result.data.codeblocks._);
              if (plugin.config.excludeHeadings) cleanResult = removeHeadings(cleanResult);
              if (plugin.config.excludeListItem) cleanResult = removeListItem(cleanResult);
              cleanResult = cleanString(cleanResult);
              const excerpt = createExcerpt(cleanResult, plugin.config.maxWordsCount);
              if (plugin.config.overrideExcerpt)
                post.frontmatter.excerpt = excerpt.trim();
            });
            console.log(`elderjs-plugin-blog-excerpt: Excerpts generated for route[${route}]`);
          });
          return { data }
        } else {
          console.log('elderjs-plugin-blog-excerpt: Skipping excerpt generation as @elderjs/plugin-markdown not detected.');
        }
      }
    },
  ],
  config: {
    routes: [],
    maxWordsCount: 55,
    overrideExcerpt: false,
    excludeHeadings: true,
    excludeCodeBlock: true,
    excludeListItem: true,
  },
  anotherProp: {} // this will be available as a named export. :) Useful for exposing plugin internals. 
};

module.exports = plugin;
