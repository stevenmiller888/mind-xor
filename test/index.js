
/**
 * Dependencies.
 */

var assert = require('assert');
var xor = require('..');

/**
 * Tests.
 */

describe('xor', function() {
  it('should be an array', function() {
    assert(xor instanceof Array);
  });

  it('should have input > hidden weights', function() {
    assert(xor[0]);
  });

  it('should have hidden > output weights', function() {
    assert(xor[1]);
  });
});
