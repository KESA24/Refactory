const { assert } = require('chai');
const { fibonacci } = require('../fibonacci');

describe('Testing_First the fibonacci function', () => {
    it('must be a number', () => {
      const result = fibonacci(5);
      assert.isArray(result);
    });
    it('must be a number greater than or equal to 0', () => {
      const result = fibonacci(0);
      assert.isArray(result);
    });
    it('must be a number less than 1000', () => {
      const result = fibonacci(200);
      assert.isArray(result);
    });
    it('returns the sequence numbers less than the argument value', () => {
      const result = fibonacci(200);
      assert.isArray(result);
    });
  });



