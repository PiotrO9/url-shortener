const RegexChecker = require('../src/utils/UrlRegexChecker.js');

test('Should return false when input is an empty string', () => {
    expect(RegexChecker('')).toBe(false)
})