var vue = require('./index')

const mockContext = (webpackVersion = 1) => {
  const ctx = {
    fileType: jest.fn(),
    webpackVersion: {
      major: webpackVersion
    } 
  }
  ctx.fileType.all = jest.fn()
  ctx.fileType.add = jest.fn()
  return ctx
}

test('default options', () => {
  expect(typeof vue({})).toBe('function')
})

;[1, 2].forEach((webpackVer) => {
  test(`default options on webpack ${webpackVer}`, () => {
    const blockfn = vue({})
    expect(blockfn(mockContext(webpackVer))).toMatchSnapshot()
  })

  test(`customize js loader on webpack ${webpackVer}`, () => {
    const blockfn = vue({loaders: {js: 'ts-loader'}})
    expect(blockfn(mockContext(webpackVer))).toMatchSnapshot()
  })

  test(`customize css loader on webpack ${webpackVer}`, () => {
    const blockfn = vue({loaders: {css: 'sass-loader'}})
    expect(blockfn(mockContext(webpackVer))).toMatchSnapshot()
  })

  test(`customize css with extract on webpack ${webpackVer}`, () => {
    const blockfn = vue({
      loaders: {css: 'css-loader'}, 
      extractCSS: true
    })
    expect(blockfn(mockContext(webpackVer))).toMatchSnapshot()
  })

  ;['sass', 'less', 'stylus'].forEach((ext) => {
    test(`customize css using ${ext} with extract on webpack ${webpackVer}`, () => {
      const blockfn = vue({
        loaders: {css: `${ext}-loader`}, 
        extractCSS: true
      })
      expect(blockfn(mockContext(webpackVer))).toMatchSnapshot()
    })

    test(`customize ${ext} with extract on webpack ${webpackVer}`, () => {
      const blockfn = vue({
        loaders: {[ext]: `${ext}-loader`}, 
        extractCSS: true
      })
      expect(blockfn(mockContext(webpackVer))).toMatchSnapshot()
    })
  })

  test(`extract css without loader on webpack ${webpackVer}`, () => {
    const blockfn = vue({
      extractCSS: true
    })
    expect(blockfn(mockContext(webpackVer))).toMatchSnapshot()
  })

  test(`include arbitrary options on webpack ${webpackVer}`, () => {
    const blockfn = vue({
      esModule: true
    })
    expect(blockfn(mockContext(webpackVer))).toMatchSnapshot()
  })
})