# Elder.js Plugin: elderjs-plugin-blog-excerpt

Generate excerpt from your markdown blog post. This plugin will add or override your excerpt generate by markdown plugin.

## Prerequisite

Currently this plugin only support post generate by @elderjs/plugin-markdown

```bash
npm install --save @elderjs/plugin-markdown
```

## Install

```bash
npm i elderjs-plugin-blog-excerpt
```

## Config

Once installed, open your `elder.config.js` and configure the plugin by adding 'elder-plugin-your-plugin' to your plugin object.

```javascript
plugins: {

  'elderjs-plugin-blog-excerpt': {
    routes: ['blog'],
    overrideExcerpt: true,
  },

}
```

### Default Config

```js
plugins: {

  'elderjs-plugin-your-plugin': {
    routes: [],
    maxWordsCount: 55,
    excludeHeadings: true, // exclude headings from excerpt
    excludeCodeBlock: true, // exclude headings from excerpt
    excludeListItem: true, // exclude headings from excerpt
  },
}
```

## Example Usage in Index

```html
<script>
  export let data, request, helpers, settings
  const blogPost = data.markdown.blog
</script>


<div class="wrapper">
  {#each blogPost as blog}
    <PostList {blog} {helpers}/>
    <div>
      <div>{blog.frontmatter.excerpt}</div>
    </div>
  {/each}
</div>
```

## Example Usage in Template

```html
<script>
  export let data, request, helpers, settings
  const { html, frontmatter } = data;
</script>

<svelte:head>
  <title>{frontmatter.title}</title>
  <meta name="description" content={frontmatter.excerpt} />
</svelte:head>

<div class="wrapper">
  {#if html}
    {@html html}
  {:else}
    <h1>Oops!! Markdown not found!</h1>
  {/if}
</div>
```

## TODO
- [ ] add unit test
- [ ] add github action
