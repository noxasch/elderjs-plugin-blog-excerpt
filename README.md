# Elder.js Plugin Template

If you are looking to write an [Elder.js](https://elderguide.com/tech/elderjs/) plugin we've setup this template to help streamline that process.

Recommended naming is `elderjs-plugin-` + `your-plugin`.

Below you'll find recommended minimal documenation. 

Once you've got your plugin written, please drop us a PR to add it to [Elderjs/plugins](https://github.com/Elderjs/plugins) repo. 

--------


# Elder.js Plugin: Blog Excerpt

Generate excerpt from you blog post

## Install

```bash
npm i elder-plugin-blog-excerpt
```

## Config

> Here is where you want to outline the config options of your plugin.

Once installed, open your `elder.config.js` and configure the plugin by adding 'elder-plugin-your-plugin' to your plugin object.

```javascript
plugins: {

  'elderjs-plugin-your-plugin': {
    routes: ['blog', 'articles'], // your route containing the blog post
    maxWordsCount: 55, // max words count in excerpt
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
    stringEnd: '...', // string or html up to you
  },
}
```

## Example Usage in Template

```html
<script>
  export let data, request, helpers, settings
</script>


<div class="wrapper">
  <div>
</div>
```
