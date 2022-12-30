const RegexChecker = require('../src/utils/UrlRegexChecker.js');

test('Should return true when input is valid link', () => {
    expect(RegexChecker('https://jestjs.io/docs/getting-started')).toBe(true)
})