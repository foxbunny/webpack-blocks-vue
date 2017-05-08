# Webpack blocks - Vue.js

This is the `vue` block providing [Vue.js](vuejs.org) component support. Uses
[vue-loader](http://vue-loader.vuejs.org/en/).

## Installation

You can install this package using npm:

    npm install --save-dev webpack-blocks-vue

or yarn:

    yarn add --dev webpack-blocks-vue

## Status

As of version 1.0.0, this package is compatible with webpack-blocks 1.x, and is,
therefore, only compatible with webpack 2. If you need to support webpack 1, use
webpack-blocks <1.0 and webpack-blocks-vue 0.2.0.

This package is currently in alpha. It has been provided to you in good faith
but it is currently almost guaranteed to break.

## Options

Uses the same options as [advanced vue-loader
configuratioin](http://vue-loader.vuejs.org/en/configurations/advanced.html),
with the additon of `extractCSS` boolean flag, which is a shortcut for [extracting CSS](http://vue-loader.vuejs.org/en/configurations/extract-css.html).

## Example:

```javascript
var {createConfig, ...} = require('webpack-blocks');
var vue = require('webpack-blocks-vue');

module.exports = createConfig([
  // ...
  vue({
    loaders: {
      coffee: 'coffee-loader',
      css: 'sass-loader'
    },
    extractCSS: true
  }),
  // ...
])
```
