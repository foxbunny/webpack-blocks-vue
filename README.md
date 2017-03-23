# Webpack blocks - Vue.js

This is the `vue` block providing [Vue.js](vuejs.org) component support. Uses
[vue-loader](http://vue-loader.vuejs.org/en/).

## Status

This package is currently in alpha. It has been provided to you in good faith
but it is currently almost guaranteed to break.

## Options

Uses the same options as [advanced vue-loader
configuratioin](http://vue-loader.vuejs.org/en/configurations/advanced.html),
with the additon of `extractCSS` boolean flag, which is a shortcut for [extracting CSS](http://vue-loader.vuejs.org/en/configurations/extract-css.html).

## Example:

```javascript
module.exports = createConfig([
  // ...
  vue({
    loaders: {
      typescript: 'awesome-typescript-loader',
      css: 'sass-loader'
    },
    extractCSS: true
  }),
  // ...
])
```
