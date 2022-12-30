const RegexChecker = require('../src/utils/UrlRegexChecker.js');

test('Should return false when input is invalid link', () => {
    expect(RegexChecker('ht/jestjs.io/docs/getting-started')).toBe(false)
})