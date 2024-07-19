const { assert } = require('chai');
const { factorial } = require('../factorial');

describe('Testing_Last the factorial function', () => {
  it('must be a number argument', () => {
    const result = factorial(2);
    assert.isNumber(result);
  });
  it('must be a number greater than or equal to 0', () => {
    const result = factorial(0);
    assert.isAtLeast(result, 0);
  });
  it('returns the correct factorial of any number', () => {
    const result = factorial(5);
    assert.equal(120, result);
  });
});


