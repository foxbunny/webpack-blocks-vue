var {createConfig} = require('webpack-blocks');
var vue = require('./index');

const vueCfg = (options) => createConfig([
  vue(options)
]);


test('default options', () => {
  expect(vueCfg({})).toMatchSnapshot();
});

test('custom options', () => {
  expect(vueCfg({
    loaders: {
      css: "css-loader",
    },
  })).toMatchSnapshot();
});

test('extract CSS', () => {
  expect(vueCfg({
    extractCSS: true
  })).toMatchSnapshot();
});

['sass', 'stylus', 'less'].forEach(cssLoader => {
  test(`extract CSS with ${cssLoader}-loader`, () => {
    expect(vueCfg({
      loaders: {[cssLoader]: `${cssLoader}-loader`},
      extractCSS: true,
    })).toMatchSnapshot();
  });
});

test('arbitrary options', () => {
  expect(vueCfg({
    foo: 'bar',
  })).toMatchSnapshot();
});
