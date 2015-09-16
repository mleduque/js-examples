describe('Concatenation function', function() {
  var concat = require('../src/concat.js');

  it('returns the empty string when given no argument', function() {
    expect(concat()).toBe(''); // ===
  });
  it('includes the first string in the result', function() {
    expect(concat('Hello ', 'World')).toContain('Hello ');
  });
});

