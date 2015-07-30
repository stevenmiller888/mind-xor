
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

  it('should have an inputHidden property', function() {
    assert(xor.inputHidden);
  });

  it('should have an hiddenOutput property', function() {
    assert(xor.hiddenOutput);
  });
});
