
/**
 * Dependencies.
 */

var assert = require('assert');
var xor = require('..');

/**
 * Tests.
 */

describe('xor', function() {
  it('should be an object', function() {
    assert.equal(typeof xor, 'object');
  });

  it('should have an inputHiddenWeights property', function() {
    assert(xor.inputHiddenWeights);
  });

  it('should have an hiddenOutputWeights property', function() {
    assert(xor.hiddenOutputWeights);
  });
});