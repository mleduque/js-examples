describe('Concatenation function with failure', function() {
  var concat = require('../src/concat.js');

  it('ignores undefined arguments', function() {
    expect(concat(undefined, 'string')).toBe('string');
  });
});

